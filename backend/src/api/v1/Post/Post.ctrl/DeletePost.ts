import { log } from "console";
import { Request, Response } from "express";
import { getRepository, Repository } from "typeorm";
import { Post } from "../../../../entity/Post";
import { handleResponse } from "../../../../lib/handleResponse";

export default async (request: Request, response: Response) => {
  try {
    const { post_idx } = request.body;

    console.log(post_idx);

    const postRepository: Repository<Post> = getRepository(Post);

    const findPost = await postRepository.findOne({ where: { idx: post_idx } });
    if (!findPost) {
      console.log("존재하지 않는 글 입니다.");
      handleResponse(response, 404, "존재하지 않는 글 입니다.");
      return;
    }
    await postRepository.delete(findPost);
    console.log("성공적으로 글이 삭제되었습니다.");
    handleResponse(response, 200, "성공적으로 글이 삭제되었습니다.");
    return;
  } catch (err) {
    console.log(err);
    handleResponse(response, 500, "서버 에러");
    return;
  }
};
