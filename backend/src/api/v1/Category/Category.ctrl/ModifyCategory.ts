import { Request, Response } from "express";
import { getRepository, Repository } from "typeorm";
import { Category } from "../../../../entity/Category";
import { handleResponse } from "../../../../lib/handleResponse";

export default async (request: Request, response: Response) => {
  try {
    const { category_name, change_name } = request.body;
    const categoryRepository: Repository<Category> = getRepository(Category);

    const category = await categoryRepository.findOne({
      where: { category: category_name },
    });
    if (!category) {
      console.log("존재하지 않는 카테고리입니다.");
      handleResponse(response, 404, "존재하지 않는 카테고리입니다.");
      return;
    }

    category.category = change_name;

    await categoryRepository.save(category);
    console.log("수정 성공");
    handleResponse(response, 200, "수정 성공");
    return;
  } catch (err) {
    console.log(err);
    handleResponse(response, 500, "서버 에러");
    return;
  }
};
