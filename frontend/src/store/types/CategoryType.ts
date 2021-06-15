import { AxiosError } from "axios";
import { PostState } from "./PostType";

export interface ICategoryReducer {
  getCategoryData: { res: CategoryState[] | null };
  getCategoryErr: AxiosError | null;
  getPostCategoryData: { res: PostState[] | PostState | null };
  getPostCategoryErr: AxiosError | null;
  createCategoryData: Response | null;
  createCategoryErr: AxiosError | null;
  modifyCategoryData: Response | null;
  modifyCategoryErr: AxiosError | null;
  deleteCategoryData: Response | null;
  deleteCategoryErr: AxiosError | null;
}

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
