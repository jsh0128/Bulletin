import { Response } from "express";
import { getRepository, Repository } from "typeorm";
import Reply from "../../../../entity/Reply";
import User from "../../../../entity/User";
import { handleResponse } from "../../../../lib/handleResponse";
import AuthRequest from "../../../../types/AuthRequest";

export default async (request: AuthRequest, response: Response) => {
  try {
    const { reply_idx, content } = request.body;
    const user: User = request.user;
    const replyRepository: Repository<Reply> = getRepository(Reply);
    const findReply = await replyRepository.findOne({
      where: { idx: reply_idx },
    });

    if (!findReply || !reply_idx) {
      console.log("해당 답글이 존재하지 않습니다.");
      return handleResponse(response, 404, "해당 답글이 존재하지 않습니다");
    }

    if (!content) {
      console.log("내용을 입력해 주세요.");
      return handleResponse(response, 403, "내용을 입력해 주세요");
    }

    if (user.email !== findReply.fk_user_email) {
      console.log("유저가 다릅니다.");
      return handleResponse(response, 403, "유저가 다릅니다");
    }

    findReply.content = content;
    await replyRepository.save(findReply);
    return handleResponse(response, 200, "변경 성공");
  } catch (err) {
    console.log(err);
    return handleResponse(response, 500, "server error");
  }
};
