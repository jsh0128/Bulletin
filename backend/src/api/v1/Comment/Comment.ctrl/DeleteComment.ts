import { Request, Response } from "express";
import { getRepository, Repository } from "typeorm";
import { Comment } from "../../../../entity/Comment";
import User from "../../../../entity/User";
import { handleResponse } from "../../../../lib/handleResponse";
import AuthRequest from "../../../../types/AuthRequest";

export default async (request: AuthRequest, response: Response) => {
  try {
    const { comment_idx } = request.body;
    const user: User = request.user;
    const commentRepository: Repository<Comment> = getRepository(Comment);
    const findComment = await commentRepository.findOne({
      where: { idx: comment_idx },
    });

    if (!comment_idx) {
      console.log("comment idx가 없습니다.");
      handleResponse(response, 405, "comment idx가 없습니다.");
      return;
    }

    if (findComment.fk_user_email !== user.email) {
      console.log("삭제 불가");
      handleResponse(response, 403, "삭제 불가");
      return;
    }

    await commentRepository.delete(findComment);
    console.log("삭제 성공");
    handleResponse(response, 200, "삭제 성공");
    return;
  } catch (err) {
    console.log(err);
    handleResponse(response, 500, "서버");
    return;
  }
};
