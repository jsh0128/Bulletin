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
