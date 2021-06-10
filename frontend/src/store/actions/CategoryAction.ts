import { AxiosError, AxiosResponse } from "axios";
import { createAsyncAction } from "typesafe-actions";
import { IGetCategoryResponse } from "util/types/CategoryResponse";
import { IGetPost } from "util/types/PostResponse";
import { Response } from "util/types/Response";

export const GET_CATEGORY = "category/GET_CATEGORY" as const;
export const GET_CATEGORY_SUCCESS = "category/GET_CATEGORY_SUCCESS" as const;
export const GET_CATEGORY_FAILURE = "category/GET_CATEGORY_FAILURE" as const;

export const getCategoryAsync = createAsyncAction(
  GET_CATEGORY,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAILURE
)<{}, { res: { category: string; idx: number }[] | null }, AxiosError>();

export const GET_POST_CATEGORY = "category/GET_POST_CATEGORY" as const;
export const GET_POST_CATEGORY_SUCCESS = "category/GET_POST_CATEGORY_SUCCESS" as const;
export const GET_POST_CATEGORY_FAILURE = "category/GET_POST_CATEGORY_FAILURE" as const;

export const getPostCategoryAsync = createAsyncAction(
  GET_POST_CATEGORY,
  GET_POST_CATEGORY_SUCCESS,
  GET_POST_CATEGORY_FAILURE
)<{ category: number }, { res: IGetPost | IGetPost[] | null }, AxiosError>();

export const CREATE_CATEGORY = "category/CREATE_CATEGORY" as const;
export const CREATE_CATEGORY_SUCCESS = "category/CREATE_CATEGORY_SUCCESS" as const;
export const CREATE_CATEGORY_FAILURE = "category/CREATE_CATEGORY_FAILURE" as const;

export const createCategoryAsync = createAsyncAction(
  CREATE_CATEGORY,
  CREATE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_FAILURE
)<{ category: string }, Response, AxiosError>();

export const MODIFY_CATEGORY = "category/MODIFY_CATEGORY" as const;
export const MODIFY_CATEGORY_SUCCESS = "category/MODIFY_CATEGORY_SUCCESS" as const;
export const MODIFY_CATEGORY_FAILURE = "category/MODIFY_CATEGORY_FAILURE" as const;

export const modifyCategoryAsync = createAsyncAction(
  MODIFY_CATEGORY,
  MODIFY_CATEGORY_SUCCESS,
  MODIFY_CATEGORY_FAILURE
)<{ category: string; changeName: string }, Response, AxiosError>();

export const DELETE_CATEGORY = "category/DELETE_CATEGORY" as const;
export const DELETE_CATEGORY_SUCCESS = "category/DELETE_CATEGORY_SUCCESS" as const;
export const DELETE_CATEGORY_FAILURE = "category/DELETE_CATEGORY_FAILURE" as const;

export const deleteCategoryAsync = createAsyncAction(
  DELETE_CATEGORY,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAILURE
)<{ category: string }, Response, AxiosError>();
