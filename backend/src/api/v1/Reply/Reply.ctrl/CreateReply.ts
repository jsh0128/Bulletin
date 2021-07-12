import { Response } from "express";
import { getRepository, Repository } from "typeorm";
import Reply from "../../../../entity/Reply";
import User from "../../../../entity/User";
import { handleResponse } from "../../../../lib/handleResponse";
import AuthRequest from "../../../../types/AuthRequest";

export default async (request: AuthRequest, response: Response) => {
  try {
    const { comment_idx, content } = request.body;
    const replyRepository: Repository<Reply> = getRepository(Reply);
    const user: User = request.user;

    if (!comment_idx || !content) {
      return handleResponse(response, 403, "내용이 존재하지 않습니다.");
    }

    const reply = new Reply();
    reply.content = content;
    reply.fk_comment_idx = comment_idx;
    reply.fk_user_email = user.email;
    reply.name = user.name;

    reply.created_at = new Date();
    await replyRepository.save(reply);
    console.log("답글 작성 성공");
    return handleResponse(response, 200, "답글 작성 성공");
  } catch (err) {
    console.log(err);
    return handleResponse(response, 500, "server error");
  }
};
