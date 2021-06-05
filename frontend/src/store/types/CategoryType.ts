import { AxiosError } from "axios";

export interface IGetCategoryState {
  getCategoryData: { res: CategoryState[] | null };
  getCategoryErr: AxiosError | null;
}

export interface CategoryState {
  category: string;
}
