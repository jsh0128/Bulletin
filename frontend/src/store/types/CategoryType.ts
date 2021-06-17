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

export interface CategoryState {
  category: string;
  idx: number;
}
