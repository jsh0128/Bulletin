import { Request, Response } from "express";
import { getRepository, Repository } from "typeorm";
import { Category } from "../../../../entity/Category";
import { Post } from "../../../../entity/Post";
import { PostCategory } from "../../../../entity/PostCategory";
import { handleResponse } from "../../../../lib/handleResponse";

export default async (request: Request, response: Response) => {
  try {
    const { idx } = request.query;
    const postRepository: Repository<Post> = getRepository(Post);
    const postCategoryRepository: Repository<PostCategory> = getRepository(
      PostCategory
    );
    const CategoryRepository: Repository<Category> = getRepository(Category);

    let categories = [];

    if (idx) {
      // 상세 조회
      const findPost = await postRepository.findOne({
        where: { idx: idx },
      });
      if (!findPost) {
        console.log("존재하지 않는 글입니다");
        handleResponse(response, 404, "존재하지 않는 글입니다");
        return;
      }
      const findCategoryIdx = await postCategoryRepository.find({
        where: { post_idx: findPost.idx },
      });

      for (let i in findCategoryIdx) {
        const categoryName = await CategoryRepository.findOne({
          where: { idx: findCategoryIdx[i].category_idx },
        });
        categories.push(categoryName.category);
      }

      const data = { findPost, categories };

      console.log("글 조회 성공");
      handleResponse(response, 200, "글 조회 성공", data);
      return;
    } else {
      // 전체 조회
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

      const postCategories = await postCategoryRepository.find({
        select: ["idx", "post_idx", "category_idx"],
        order: { idx: "DESC" },
      });

      for (let i in posts) {
        postCategories.forEach(async (items) => {
          if (items.post_idx === posts[i].idx) {
            // 글 번호가 같을때 실행
            categories.push(
              await CategoryRepository.findOne({
                where: { idx: items.category_idx },
              })
            );
          }
        });
      }
      handleResponse(response, 200, "글 조회 성공", posts);
    }
  } catch (err) {
    console.log(err);
    handleResponse(response, 500, "서버 오류입니다");
    return;
  }
};
