import { Request, Response } from "express";
import { getRepository, Repository } from "typeorm";
import CertEmail from "../../../../entity/CertEmail";
import { handleResponse } from "../../../../lib/handleResponse";

export default async (request: Request, response: Response) => {
  try {
    const { email, certCode } = request.body;

    const CertEmailRepository: Repository<CertEmail> = getRepository(CertEmail);

    // 메일과 코드가 맞는 튜플 찾기
    const checkEmail = await CertEmailRepository.findOne({
      where: {
        email: email,
        certCode: certCode,
      },
    });

    // 메일 인증 했는지 안했는지 검사
    if (checkEmail) {
      // 메일인증 성공한 후
      handleResponse(response, 200, "메일 인증 성공");
      return;
    } else {
      // 메일인증 실패한 후
      console.log(
        "메일 인증 번호가 다릅니다. " +
          "또는 인증번호 메일을 요청하였던 이전 메일과 동일하지 않습니다"
      );
      handleResponse(response, 400, "메일 인증 실패");
      return;
    }
  } catch {
    console.log("서버 에러");
    handleResponse(response, 500, "서버 에러");
    return;
  }
};
