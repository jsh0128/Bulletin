import { AxiosError } from "axios";
import { createAsyncAction } from "typesafe-actions";
import { IGetCategoryResponse } from "util/types/CategoryResponse";

export const GET_CATEGORY = "category/GET_CATEGORY" as const;
export const GET_CATEGORY_SUCCESS = "category/GET_CATEGORY_SUCCESS" as const;
export const GET_CATEGORY_FAILURE = "category/GET_CATEGORY_FAILURE" as const;

export const getCategoryAsync = createAsyncAction(
  GET_CATEGORY,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAILURE
)<{}, { res: { category: string }[] | null }, AxiosError>();
