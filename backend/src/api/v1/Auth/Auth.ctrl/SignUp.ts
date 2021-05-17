import { Request, Response } from "express";
import User from "../../../../entity/User";
import { getRepository, Repository } from "typeorm";
import CertEmail from "../../../../entity/CertEmail";
import { handleResponse } from "../../../../lib/handleResponse";

export default async (request: Request, response: Response) => {
  try {
    const { email, name, password, profileImg, certCode } = request.body;

    const userRepository: Repository<User> = getRepository(User);
    const emailRepository: Repository<CertEmail> = getRepository(CertEmail);

    const checkCertEmail = await emailRepository.findOne({
      where: {
        email: email,
        certCode: certCode,
      },
    });

    if (!checkCertEmail) {
      console.log("이메일 인증이 되지 않았습니다.");
      return response
        .status(400)
        .json({ status: 400, message: "메일 인증 실패" });
    }

    const checkEmail = await userRepository.findOne({
      where: { email: email },
    });

    if (checkEmail) {
      console.log("중복된 회원");
      return response
        .status(409)
        .json({ status: 409, message: "중복되는 이메일이 있습니다" });
    }

    const certEmail = await emailRepository.findOne({
      where: { email: email, cert: true },
    });

    if (!certEmail) {
      console.log("이메일 인증 안함");
      handleResponse(response, 403, "이메일 인증을 해주세요");
      return;
    }

    const user: User = new User();
    user.email = email;
    user.name = name;
    user.password = password;
    user.profile_img = profileImg || null;

    await userRepository.save(user);
    console.log("회원가입에 성공하였습니다");
    handleResponse(response, 200, "회원가입에 성공하였습니다");
    return;
  } catch (err) {
    console.log(err);
    handleResponse(response, 500, "서버 오류");
    return;
  }
};
