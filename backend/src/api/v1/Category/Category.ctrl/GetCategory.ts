import { Request, Response } from "express";
import { getRepository, Repository } from "typeorm";
import { Category } from "../../../../entity/Category";
import { handleResponse } from "../../../../lib/handleResponse";

export default async (request: Request, response: Response) => {
  try {
    const categoryRepository: Repository<Category> = getRepository(Category);

    const category: Category[] = await categoryRepository.find({
      select: ["category"],
    });

    console.log("카테고리 조회 성공");
    handleResponse(response, 200, "카테고리 조회 성공", category);
    return;
  } catch (err) {
    console.log(err);
    handleResponse(response, 500, "서버 에러");
    return;
  }
};
