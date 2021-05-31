import { Request, Response } from "express";
import { getRepository, Repository } from "typeorm";
import { Category } from "../../../../entity/Category";
import { Post } from "../../../../entity/Post";
import User from "../../../../entity/User";
import { handleResponse } from "../../../../lib/handleResponse";
import { PostCategory } from "../../../../entity/PostCategory";

export default async (request: Request, response: Response) => {
  try {
    const { title, category } = request.body;
    const postRepository: Repository<Post> = getRepository(Post);
    const postCategoryRepository: Repository<PostCategory> =
      getRepository(PostCategory);

    const data = [];

    const findCategoryPost = await postCategoryRepository.find({
      where: { fk_category_idx: category },
    });

    for (let i in findCategoryPost) {
      data.push(
        await postRepository.findOne({
          where: { idx: findCategoryPost[i].fk_post_idx },
          select: [
            "idx",
            "title",
            "content",
            "introduction",
            "created_at",
            "fk_user_email",
            "preview_image",
            "created_at",
          ],
          order: { created_at: "DESC" },
        })
      );
    }

    if (title) {
      const findPost = await postRepository.find({
        where: {
          title: title,
        },
        select: [
          "idx",
          "title",
          "content",
          "introduction",
          "created_at",
          "fk_user_email",
          "preview_image",
          "created_at",
        ],
        order: { created_at: "DESC" },
      });
    }

    const findPost = await postRepository.find({
      where: {
        title: title,
        category: category,
      },
      select: [
        "idx",
        "title",
        "content",
        "introduction",
        "created_at",
        "fk_user_email",
        "preview_image",
        "created_at",
      ],
      order: { created_at: "DESC" },
    });

    handleResponse(response, 200, "글 조회 성공", findPost);
    return;
  } catch (err) {
    console.log(err);
    handleResponse(response, 500, " 서버에러");
    return;
  }
};
