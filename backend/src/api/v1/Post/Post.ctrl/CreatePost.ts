import { Response } from "express";
import { getRepository, Repository } from "typeorm";
import { Category } from "../../../../entity/Category";
import { Post } from "../../../../entity/Post";
import { PostCategory } from "../../../../entity/PostCategory";
import User from "../../../../entity/User";
import { handleResponse } from "../../../../lib/handleResponse";
import AuthRequest from "../../../../types/AuthRequest";

export default async (request: AuthRequest, response: Response) => {
  try {
    const { title, content, introduction, categories } = request.body;
    const user: User = request.user;

    const postRepository: Repository<Post> = getRepository(Post);
    const cateogoryRepository: Repository<Category> = getRepository(Category);
    const postCategoryRepository: Repository<PostCategory> = getRepository(
      PostCategory
    );

    let category;
    let categoryArray = [];
    //

    /*category를 받은뒤에 category가 있는지 먼저 검사
    있으면 category idx를 저장 그리고 post를 만들고 
     post를 만들고 그 post idx를 category idx에 넘겨*/

    if (categories) {
      for (let i in categories) {
        category = await cateogoryRepository.findOne({
          where: { category: categories[i] },
        });
        if (!category) {
          console.log("존재하지 않는 카테고리가 있습니다.");
          return handleResponse(
            response,
            405,
            "존재하지 않는 카테고리가 있습니다."
          );
        }
        categoryArray.push(category.idx);
      }
    }

    const post = new Post();
    post.title = title;
    post.content = content;
    post.introduction = introduction;
    post.fk_user_name = user.name;
    post.fk_user_email = user.email;
    post.created_at = new Date();

    await postRepository.save(post);

    console.log(post.idx);

    for (let i in categoryArray) {
      const postCategory: PostCategory = new PostCategory();
      postCategory.category_idx = categoryArray[i];
      postCategory.post_idx = post.idx;
      await postCategoryRepository.save(postCategory);
    }

    console.log("글 생성 성공");
    handleResponse(response, 200, "글 생성 성공");
    return;
  } catch (err) {
    console.log(err);
    handleResponse(response, 500, "서버 에러");
    return;
  }
};
