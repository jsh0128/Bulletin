import { AxiosError } from "axios";
import { IGetCategoryResponse } from "util/types/CategoryResponse";

export interface IGetCategoryState {
  getCategoryData: { res: CategoryState[] | null };
  getCategoryErr: AxiosError | null;
}

export interface CategoryState {
  category: string;
}
