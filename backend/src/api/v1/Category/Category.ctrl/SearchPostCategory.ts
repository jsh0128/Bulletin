import { Request, Response } from "express";
import { getRepository, Repository } from "typeorm";
import { Category } from "../../../../entity/Category";
import { Post } from "../../../../entity/Post";
import { PostCategory } from "../../../../entity/PostCategory";
import User from "../../../../entity/User";
import { handleResponse } from "../../../../lib/handleResponse";

export default async (request: Request, response: Response) => {
  try {
    const { category } = request.query;
    const categoryRepository: Repository<Category> = getRepository(Category);
    const postCategoryRepository: Repository<PostCategory> =
      getRepository(PostCategory);
    const postRepository: Repository<Post> = getRepository(Post);
    const userRepository: Repository<User> = getRepository(User);

    const checkCategory = await categoryRepository.findOne({
      where: { idx: category },
    });

    if (!checkCategory) {
      console.log("없는 카테고리입니다.");
      handleResponse(response, 404, "없는 카테고리");
    }

    const posts = await postCategoryRepository.find({
      where: { fk_category_idx: category },
    });

    const data = [];

    for (let i in posts) {
      data.push(
        await postRepository.findOne({ where: { idx: posts[i].fk_post_idx } })
      );
    }

    const postCategories = await postCategoryRepository.find({
      select: ["idx", "fk_post_idx", "fk_category_idx"],
      order: { idx: "DESC" },
    });

    for (let i in data) {
      const categories = [];
      const userName = await userRepository.findOne({
        email: data[i].fk_user_email,
      });
      for (let j in postCategories) {
        if (postCategories[j].fk_post_idx === data[i].idx) {
          categories.push(
            await categoryRepository.findOne({
              where: { idx: postCategories[j].fk_category_idx },
            })
          );
        }
      }
      data[i].categories = categories;
      data[i].user_name = userName.name;
    }

    handleResponse(response, 200, "조회 성공", data);
  } catch (err) {
    console.log(err);
    handleResponse(response, 500, "서버 에러");
    return;
  }
};
