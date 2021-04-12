import { Request, Response } from "express";
import { getRepository, Repository } from "typeorm";
import { Category } from "../../../../entity/Category";
import { Post } from "../../../../entity/Post";
import { handleResponse } from "../../../../lib/handleResponse";

export default async (request: Request, response: Response) => {
  try {
    const { title, content, post_idx, category_idx } = request.body;

    const postRepository: Repository<Post> = getRepository(Post);
    const categoryRepository: Repository<Category> = getRepository(Category);

    const checkPost = await postRepository.findOne({
      where: { idx: post_idx },
    });
    if (!checkPost) {
      console.log("존재하지 않는 글 입니다.");
      return handleResponse(response, 404, "존재하지 않는 글 입니다.");
    }

    const category = await categoryRepository.findOne({
      where: { idx: category_idx },
    });
    if (!category) {
      console.log("존재하지 않는 카테고리");
      return handleResponse(response, 405, "존재하지 않는 카테고리");
    }

    checkPost.content = content;
    checkPost.title = title;
    checkPost.fk_category_name = category.category;

    await postRepository.save(checkPost);
    console.log("글 수정 성공");
    return handleResponse(response, 200, "글 수정 성공");
  } catch (err) {
    console.log(err);
    handleResponse(response, 500, "서버 에러");
    return;
  }
};
