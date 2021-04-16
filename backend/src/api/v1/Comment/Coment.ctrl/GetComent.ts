import { Request, Response } from "express";
import { getRepository, Repository } from "typeorm";
import { Coment } from "../../../../entity/Coment";
import User from "../../../../entity/User";
import { handleResponse } from "../../../../lib/handleResponse";

export default async (request: Request, response: Response) => {
  try {
    const { postIdx } = request.body;
    const comentRepository: Repository<Coment> = getRepository(Coment);
    const userRepository: Repository<User> = getRepository(User);

    if (!postIdx) {
      console.log("post idx가 없습니다.");
      handleResponse(response, 404, "post idx가 없습니다.");
      return;
    }

    const findComent = await comentRepository.find({
      where: { fk_post_idx: postIdx },
      select: ["content", "created_at", "fk_user_email"],
      order: { created_at: "DESC" },
    });

    if (!findComent) {
      console.log("post idx가 잘못되었습니다.");
      handleResponse(response, 404, "post idx가 잘못되었습니다");
      return;
    }

    let data = [];

    for (let i in findComent) {
      const username = await userRepository.findOne({
        where: { email: findComent[i].fk_user_email },
      });
      data.push({
        idx: findComent[i].idx,
        content: findComent[i].content,
        user_email: findComent[i].fk_user_email,
        user_name: username.name,
        user_profile_img: username.profile_img,
      });
    }
    console.log("댓글 조회 성공");
    handleResponse(response, 200, "댓글 조회 성공", data);
    return;
  } catch (err) {
    console.log(err);
    handleResponse(response, 500, "서버 에러");
    return;
  }
};
