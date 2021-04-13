import { Request, Response } from "express";
import { getRepository, Repository } from "typeorm";
import { Category } from "../../../../entity/Category";
import { handleResponse } from "../../../../lib/handleResponse";

export default async (request: Request, response: Response) => {
  try {
    const { category_idx, change_name } = request.body;
    const categoryRepository: Repository<Category> = getRepository(Category);

    const category = await categoryRepository.findOne({
      where: { idx: category_idx },
    });
    if (!category) {
      console.log("존재하지 않는 카테고리입니다.");
      handleResponse(response, 404, "존재하지 않는 카테고리입니다.");
      return;
    }

    category.category = change_name;

    categoryRepository.save(category);
  } catch (err) {
    console.log(err);
    handleResponse(response, 500, "서버 에러");
    return;
  }
};
