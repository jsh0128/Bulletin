import { Request, Response } from "express";
import { getRepository, Repository } from "typeorm";
import { Comment } from "../../../../entity/Comment";
import User from "../../../../entity/User";
import { handleResponse } from "../../../../lib/handleResponse";
import AuthRequest from "../../../../types/AuthRequest";

export default async (request: AuthRequest, response: Response) => {
  try {
    const { post_idx, content } = request.body;
    const commentRepository: Repository<Comment> = getRepository(Comment);
    const user: User = request.user;

    const comment = new Comment();
    comment.fk_post_idx = post_idx;
    comment.fk_user_email = user.email;
    comment.content = content;
    comment.name = user.name;
    comment.created_at = new Date();

    await commentRepository.save(comment);
    console.log("댓글 작성 성공");
    handleResponse(response, 200, "댓글 작성 성공");
    return;
  } catch (err) {
    console.log(err);
    handleResponse(response, 500, "server error");
    return;
  }
};
