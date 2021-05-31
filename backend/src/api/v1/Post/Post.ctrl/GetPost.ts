import { Request, Response } from "express";
import { getRepository, Repository } from "typeorm";
import { Category } from "../../../../entity/Category";
import { Post } from "../../../../entity/Post";
import { PostCategory } from "../../../../entity/PostCategory";
import User from "../../../../entity/User";
import { handleResponse } from "../../../../lib/handleResponse";

export default async (request: Request, response: Response) => {
  try {
    const { idx } = request.query;
    const postRepository: Repository<Post> = getRepository(Post);
    const postCategoryRepository: Repository<PostCategory> =
      getRepository(PostCategory);
    const CategoryRepository: Repository<Category> = getRepository(Category);
    const UserRepository: Repository<User> = getRepository(User);

    let categories = [];

    if (idx) {
      // 상세 조회
      const findPost = await postRepository.findOne({
        // 존재하는 글인지 확인
        where: { idx: idx },
      });
      if (!findPost) {
        console.log("존재하지 않는 글입니다");
        handleResponse(response, 404, "존재하지 않는 글입니다");
        return;
      }

      const findCategoryIdx = await postCategoryRepository.find({
        where: { fk_post_idx: findPost.idx },
      });

      for (let i in findCategoryIdx) {
        const categoryName = await CategoryRepository.findOne({
          where: { idx: findCategoryIdx[i].fk_category_idx },
        });
        categories.push(categoryName.category);
      }

      const userFind = await UserRepository.findOne({
        where: { email: findPost.fk_user_email },
      });

      if (!userFind) {
        console.log("존재하지 않는 유저입니다");
        handleResponse(response, 404, "존재하지 않는 유저입니다");
        return;
      }

      const user_name = userFind.name;

      const data = {
        category: categories,
        idx: findPost.idx,
        user_name: user_name,
        title: findPost.title,
        content: findPost.content,
        user_email: findPost.fk_user_email,
        preview_image: findPost.preview_image,
        introduction: findPost.introduction,
        created_at: findPost.created_at,
      };

      console.log("글 조회 성공");
      handleResponse(response, 200, "글 조회 성공", data);
      return;
    } else {
      // 전체 조회
      const posts: Post[] = await postRepository.find({
        select: [
          "idx",
          "title",
          "introduction",
          "created_at",
          "fk_user_email",
          "preview_image",
          "created_at",
        ],
        order: {
          created_at: "DESC",
        },
      });

      const postCategories = await postCategoryRepository.find({
        select: ["idx", "fk_post_idx", "fk_category_idx"],
        order: { idx: "DESC" },
      });

      const data = [];

      for (let i in posts) {
        categories = [];

        const userName = await UserRepository.findOne({
          email: posts[i].fk_user_email,
        });

        for (let j in postCategories) {
          if (postCategories[j].fk_post_idx === posts[i].idx) {
            // postCategory의 post_idx랑 post의 idx랑 같을때
            const categoryName = await CategoryRepository.findOne({
              where: { idx: postCategories[j].fk_category_idx },
            });
            categories.push(categoryName.category);
          }
        }
        data.push({
          idx: posts[i].idx,
          title: posts[i].title,
          created_at: posts[i].created_at,
          introduction: posts[i].introduction,
          preview_image: posts[i].preview_image,
          user_email: posts[i].fk_user_email,
          category: categories,
          user_name: userName.name,
        });
      }

      handleResponse(response, 200, "글 조회 성공", data);
      return;
    }
  } catch (err) {
    console.log(err);
    handleResponse(response, 500, "서버 오류입니다");
    return;
  }
};
