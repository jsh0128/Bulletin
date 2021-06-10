import { AxiosError } from "axios";
import { PostState } from "./PostType";

export interface IGetCategoryState {
  getCategoryData: { res: CategoryState[] | null };
  getCategoryErr: AxiosError | null;
}

export interface CategoryState {
  category: string;
  idx: number;
}

export interface IGetPostCategoryState {
  getPostCategoryData: { res: PostState[] | PostState | null };
  getPostCategoryErr: AxiosError | null;
}

export interface ICreateCategoryState {
  createCategoryData: Response | null;
  createCategoryErr: AxiosError | null;
}
export interface IModifyCategoryState {
  modifyCategoryData: Response | null;
  modifyCategoryErr: AxiosError | null;
}
export interface IDeleteCategoryState {
  deleteCategoryData: Response | null;
  deleteCategoryErr: AxiosError | null;
}
