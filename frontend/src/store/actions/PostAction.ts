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
