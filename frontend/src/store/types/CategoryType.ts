import { AxiosError } from "axios";
import { IGetCategoryResponse } from "util/types/CategoryResponse";

export interface IGetCategoryState {
  getCategoryData: { data: CategoryState[] | null };
  getCategoryErr: AxiosError | null;
}

export interface CategoryState {
  category: string[];
}
