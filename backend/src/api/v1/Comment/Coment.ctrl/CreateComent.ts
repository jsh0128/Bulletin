import { Request, Response } from "express";
import { getRepository, Repository } from "typeorm";
import { Coment } from "../../../../entity/Coment";
import User from "../../../../entity/User";
import { handleResponse } from "../../../../lib/handleResponse";
import AuthRequest from "../../../../types/AuthRequest";

export default async (request: AuthRequest, response: Response) => {
  try {
    const { post_idx, content } = request.body;
    const comentRepository: Repository<Coment> = getRepository(Coment);

    const user: User = request.user;

    const coment = new Coment();
    coment.fk_post_idx = post_idx;
    coment.fk_user_email = user.email;
    coment.content = content;
    coment.created_at = new Date();

    await comentRepository.save(coment);
    console.log("댓글 작성 성공");
    handleResponse(response, 200, "댓글 작성 성공");
    return;
  } catch (err) {
    console.log(err);
    handleResponse(response, 500, "server error");
    return;
  }
};
