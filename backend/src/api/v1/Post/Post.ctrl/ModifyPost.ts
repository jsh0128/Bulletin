import { Request, Response } from "express";
import { getRepository, Repository } from "typeorm";
import { Category } from "../../../../entity/Category";
import { Post } from "../../../../entity/Post";
import { PostCategory } from "../../../../entity/PostCategory";
import { handleResponse } from "../../../../lib/handleResponse";

export default async (request: Request, response: Response) => {
  try {
    const { title, content, post_idx, categories } = request.body;

    const postRepository: Repository<Post> = getRepository(Post);
    const categoryRepository: Repository<Category> = getRepository(Category);
    const postCategoryRepository: Repository<PostCategory> = getRepository(
      PostCategory
    );

    const checkPost = await postRepository.findOne({
      where: { idx: post_idx },
    });
    // checkPost는 글이 존재하지는지 확인
    if (!checkPost) {
      console.log("존재하지 않는 글 입니다.");
      return handleResponse(response, 404, "존재하지 않는 글 입니다.");
    }

    const postCategory = await postCategoryRepository.find({
      where: { post_idx: post_idx },
    });

    postCategory.forEach((item) => {});

    let category = [];
    for (let i in categories) {
      let findCategory = await categoryRepository.findOne({
        where: { category: categories[i] },
      });
      if (!category) {
        console.log("존재하지 않는 카테고리");
        return handleResponse(response, 405, "존재하지 않는 카테고리");
      }
      category.push(findCategory);
    }
    // category는 존재하는 카테고리인지 확인

    checkPost.content = content;
    checkPost.title = title;

    await postRepository.save(checkPost);
    console.log("글 수정 성공");
    return handleResponse(response, 200, "글 수정 성공");
  } catch (err) {
    console.log(err);
    handleResponse(response, 500, "서버 에러");
    return;
  }
};
