import { AxiosError } from "axios";
import { createAsyncAction } from "typesafe-actions";
import { IGetPostResponse } from "util/types/PostResponse";

export const GET_POST = "post/GET_POST" as const;
export const GET_POST_SUCCESS = "post/GET_POST_SUCCESS" as const;
export const GET_POST_FAILURE = "post/GET_POST_FAILURE" as const;

export const getPostAsync = createAsyncAction(
  GET_POST,
  GET_POST_SUCCESS,
  GET_POST_FAILURE
)<{ postIdx?: number }, { res: IGetPostResponse }, AxiosError>();

export const GET_CATEGORY = "category/GET_CATEGORY" as const;
export const GET_CATEGORY_SUCCESS = "category/GET_CATEGORY_SUCCESS" as const;
export const GET_CATEGORY_FAILURE = "category/GET_CATEGORY_FAILURE" as const;

export const getCategoryAsync = createAsyncAction(
  GET_CATEGORY,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAILURE
)<{ postIdx?: number }, { res: IGetPostResponse }, AxiosError>();
