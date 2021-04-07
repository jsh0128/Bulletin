import { Request, Response } from "express";
import { User } from "../../../../entity/User";
import { getRepository, Repository } from "typeorm";
import EmailCode from "../../../../entity/EmailCode";

export default async (request: Request, response: Response) => {
  try {
    const { email, name, password, profileImg } = request.body;

    const userRepository: Repository<User> = getRepository(User);
    const emailRepository: Repository<EmailCode> = getRepository(EmailCode);

    const checkEmail = await userRepository.findOne(email);

    if (checkEmail) {
      console.log("중복된 회원");
      return response
        .status(409)
        .json({ status: 409, message: "중복되는 이메일이 있습니다" });
    }

    const user: User = new User();
    user.email = email;
    user.name = name;
    user.password = password;
    user.profile_img = profileImg || null;

    await userRepository.save(user);
    console.log("회원가입에 성공하였습니다");
    return response
      .status(200)
      .json({ status: 200, message: "회원가입에 성공하였습니다" });
  } catch {
    console.log("회원가입 서버 에러");
    return response
      .status(500)
      .json({ status: 500, message: "회원가입 서버 에러" });
  }
};
