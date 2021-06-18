import { Request, Response } from "express";
import { getRepository, Repository } from "typeorm";
import User from "../../../../entity/User";
import { handleResponse } from "../../../../lib/handleResponse";
import AuthRequest from "../../../../types/AuthRequest";

export default async (request: AuthRequest, response: Response) => {
  try {
    const { user } = request;
    const { password, profile_img, name } = request.body;
    const userRepository: Repository<User> = getRepository(User);
    const findUser = await userRepository.findOne({
      where: { email: user.email },
    });

    if (!findUser) {
      return handleResponse(response, 404, "사용자를 찾을 수 없습니다");
    }

    user.name = name;
    user.password = password ? password : user.password;
    user.profile_img = profile_img;
    userRepository.save(user);

    return handleResponse(response, 200, "프로필을 변경하였습니다.");
  } catch (err) {
    console.log(err);
    handleResponse(response, 500, "서버 오류입니다.");
    return;
  }
};
