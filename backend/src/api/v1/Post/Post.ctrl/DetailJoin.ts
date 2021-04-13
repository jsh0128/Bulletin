import { Request, Response } from "express";
import { getRepository, Repository } from "typeorm";
import { Post } from "../../../../entity/Post";
import { handleResponse } from "../../../../lib/handleResponse";

export default async (request: Request, response: Response) => {
  try {
    const { idx } = request.query;
    const postRepository: Repository<Post> = getRepository(Post);
    if (idx) {
      const findPost = await postRepository.findOne({ where: { idx: idx } });
      if (!findPost) {
        console.log("존재하지 않는 글입니다");
        handleResponse(response, 404, "존재하지 않는 글입니다");
        return;
      }

      console.log("글 조회 성공");
      handleResponse(response, 200, "글 조회 성공", findPost);
    } else {
      const posts: Post[] = await postRepository.find({
        select: [
          "idx",
          "content",
          "introduction",
          "created_at",
          "fk_user_name",
          "preview_image",
          "created_at",
        ],
        order: {
          created_at: "DESC",
        },
      });
      handleResponse(response, 200, "글 조회 성공", posts);
    }
  } catch (err) {
    console.log(err);
    handleResponse(response, 500, "서버 오류입니다");
    return;
  }
};
