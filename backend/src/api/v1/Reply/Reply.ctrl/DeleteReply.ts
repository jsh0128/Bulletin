import { Response } from "express";
import { getRepository, Repository } from "typeorm";
import Reply from "../../../../entity/Reply";
import User from "../../../../entity/User";
import { handleResponse } from "../../../../lib/handleResponse";
import AuthRequest from "../../../../types/AuthRequest";

export default async (request: AuthRequest, response: Response) => {
  try {
    const { reply_idx } = request.query;
    console.log(reply_idx);
    const user: User = request.user;
    const replyRepository: Repository<Reply> = getRepository(Reply);
    const findReply = await replyRepository.findOne({
      where: { idx: reply_idx },
    });

    if (!findReply || !reply_idx) {
      console.log("해당 답글이 존재하지 않습니다.");
      return handleResponse(response, 404, "해당 답글이 존재하지 않습니다.");
    }

    if (user.email !== findReply.fk_user_email) {
      console.log("해당 유저가 아님");
      return handleResponse(response, 403, "삭제 불가");
    }

    await replyRepository.delete(findReply);
    console.log("삭제 성공");
    return handleResponse(response, 200, "삭제 성공");
  } catch (err) {
    console.log(err);
    handleResponse(response, 500, "server error");
  }
};
