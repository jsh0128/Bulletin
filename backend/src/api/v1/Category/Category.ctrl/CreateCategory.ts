import { Request, Response } from "express";
import { getRepository, Repository } from "typeorm";
import { Category } from "../../../../entity/Category";
import { handleResponse } from "../../../../lib/handleResponse";

export default async (request: Request, response: Response) => {
  try {
    const categoryRepository: Repository<Category> = getRepository(Category);

    const findCategory = await categoryRepository.findOne({
      where: { category: request.body.category },
    });

    if (findCategory) {
      console.log("이미 있는 카테고리");
      handleResponse(response, 409, "이미 있는 카테고리입니다.");
      return;
    }

    const category = new Category();
    category.category = request.body.category;

    await categoryRepository.save(category);
    console.log("카테고리 생성 완료");
    handleResponse(response, 200, "카테고리 정상적으로 생성되었습니다.");
    return;
  } catch (err) {
    console.log(err);
    handleResponse(response, 500, "서버 에러");
    return;
  }
};
