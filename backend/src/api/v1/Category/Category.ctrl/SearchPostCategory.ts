import { Request, Response } from "express";
import { getRepository, Repository } from "typeorm";
import { Category } from "../../../../entity/Category";
import { Post } from "../../../../entity/Post";
import { PostCategory } from "../../../../entity/PostCategory";
import { handleResponse } from "../../../../lib/handleResponse";

export default async (request: Request, response: Response) => {
  try {
    const { category } = request.query;
    const categoryRepository: Repository<Category> = getRepository(Category);
    const postCategoryRepository: Repository<PostCategory> =
      getRepository(PostCategory);
    const postRepository: Repository<Post> = getRepository(Post);

    const posts = await postCategoryRepository.find({
      where: { fk_category_idx: category },
    });

    const data = [];

    for (let i in posts) {
      data.push(
        await postRepository.findOne({ where: { idx: posts[i].fk_post_idx } })
      );
    }

    console.log(data);
    handleResponse(response, 200, "");
  } catch (err) {
    console.log(err);
    handleResponse(response, 500, "서버 에러");
    return;
  }
};
