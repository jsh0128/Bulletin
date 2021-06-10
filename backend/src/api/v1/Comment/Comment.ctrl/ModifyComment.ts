import { Request, Response } from "express";
import { getRepository, Repository } from "typeorm";
import { Comment } from "../../../../entity/Comment";
import User from "../../../../entity/User";
import { handleResponse } from "../../../../lib/handleResponse";
import AuthRequest from "../../../../types/AuthRequest";

export default async (request: AuthRequest, response: Response) => {
  try {
    const { idx, content } = request.body;
    const user: User = request.user;
    const commentRepository: Repository<Comment> = getRepository(Comment);

    const findComment = await commentRepository.findOne({
      where: { idx: idx },
    });

    if (findComment.fk_user_email !== user.email) {
      console.log("수정 불가");
      handleResponse(response, 403, "수정 불가");
      return;
    }

    findComment.content = content;
    await commentRepository.save(findComment);

    console.log("변경 성공");
    handleResponse(response, 200, "댓글 변경 성공");
    return;
  } catch (err) {
    console.log(err);
    handleResponse(response, 500, "서버");
    return;
  }
};
