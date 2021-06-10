import { Request, Response } from "express";
import { getRepository, Repository } from "typeorm";
import { Comment } from "../../../../entity/Comment";
import User from "../../../../entity/User";
import { handleResponse } from "../../../../lib/handleResponse";

export default async (request: Request, response: Response) => {
  try {
    const { post_idx } = request.query;
    const commentRepository: Repository<Comment> = getRepository(Comment);
    const userRepository: Repository<User> = getRepository(User);

    if (!post_idx) {
      console.log("post idx가 없습니다.");
      handleResponse(response, 404, "post idx가 없습니다.");
      return;
    }

    const findComment = await commentRepository.find({
      where: { fk_post_idx: post_idx },
      select: ["content", "created_at", "fk_user_email", "idx"],
      order: { created_at: "DESC" },
    });

    if (!findComment) {
      console.log("post idx가 잘못되었습니다.");
      handleResponse(response, 404, "post idx가 잘못되었습니다");
      return;
    }

    let data = [];

    for (let i in findComment) {
      const username = await userRepository.findOne({
        where: { email: findComment[i].fk_user_email },
      });
      data.push({
        idx: findComment[i].idx,
        content: findComment[i].content,
        created_at: findComment[i].created_at,
        user_email: findComment[i].fk_user_email,
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
