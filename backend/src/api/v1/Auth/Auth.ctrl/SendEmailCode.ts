import { Request, Response } from "express";
import nodemailer from "nodemailer";
import "dotenv/config";
import { handleResponse } from "../../../../lib/handleResponse";
import CertEmail from "../../../../entity/CertEmail";
import { getRepository, Repository } from "typeorm";

const { GMAIL_ID, GMAIL_PW } = process.env;

export default async (request: Request, response: Response) => {
  try {
    const authNum = Math.random().toString().substr(2, 6);
    const emailCertRepository: Repository<CertEmail> = getRepository(CertEmail);
    const { email } = request.body;

    const overEmail = await emailCertRepository.findOne({
      where: { email: email },
    });
    // 중복되는 메일 있는지 확인

    const sendMailOption = nodemailer.createTransport({
      service: "naver",
      host: "smtp.naver.com",
      port: 587,
      secure: false,
      auth: {
        user: GMAIL_ID,
        pass: GMAIL_PW,
      },
    });

    const mailOption = {
      from: GMAIL_ID,
      to: email,
      subject: "[블로그 제목] 이메일 인증 코드",
      html: `<html>
      <body>
        <div>
          <p style='color:black'>회원 가입을 위한 인증번호 입니다.</p>
          <p style='color:black'>아래의 인증 번호를 입력하여 인증을 완료해주세요.</p>
          <h2>${authNum}</h2>
        </div>
      </body>
      </html>`,
    };

    // 새로운 메일 전송시 그전 코드로 인증 불가

    console.log("중복되는 이메일 " + overEmail);

    if (overEmail) {
      overEmail.certCode = authNum;

      await emailCertRepository.save(overEmail);
    } else {
      const certCode: CertEmail = new CertEmail();
      certCode.certCode = authNum;
      certCode.email = email;

      await emailCertRepository.save(certCode);
    }

    await sendMailOption.sendMail(mailOption, (err, info) => {
      if (err) {
        console.log(err);
        console.log("메일 전송 오류입니다.");
        handleResponse(response, 500, "서버 메일 전송 오류.");

        return;
      } else {
        console.log("Email sent=" + info.response);

        handleResponse(response, 200, "메일 전송 성공.");
        return;
      }
    });
  } catch {
    console.log("서버 오류입니다.");
    handleResponse(response, 500, "서버 오류입니다.");
    return;
  }
};
