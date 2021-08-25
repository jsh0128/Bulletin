import { Response } from "express";
import { handleResponse } from "../../../../lib/handleResponse";
import AuthRequest from "../../../../types/AuthRequest";
import User from "../../../../entity/User";
import { getRepository, Repository } from "typeorm";

export default async (request: AuthRequest, response: Response) => {
  try {
    const UserRepository: Repository<User> = await getRepository(User);

    const userList: User[] = await UserRepository.find({
      select: ["email", "name", "is_github", "profile_img"],
    });

    return handleResponse(response, 200, "유저 조회 성공", userList);
  } catch (err) {
    console.log(err);
    return handleResponse(response, 500, "서버 오류입니다.");
  }
};
