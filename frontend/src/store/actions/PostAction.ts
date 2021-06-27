import { AxiosError, AxiosResponse } from "axios";
import { createAsyncAction } from "typesafe-actions";
import { IGetPost, IGetPostResponse } from "util/types/PostResponse";

export const GET_POST = "post/GET_POST" as const;
export const GET_POST_SUCCESS = "post/GET_POST_SUCCESS" as const;
export const GET_POST_FAILURE = "post/GET_POST_FAILURE" as const;

export const getPostAsync = createAsyncAction(
  GET_POST,
  GET_POST_SUCCESS,
  GET_POST_FAILURE
)<{ postIdx?: number }, { res: IGetPost | IGetPost[] }, AxiosError>();

export const CREATE_POST = "CREATE_POST" as const;
export const CREATE_POST_SUCCESS = "CREATE_POST_SUCCESS" as const;
export const CREATE_POST_FAILURE = "CREATE_POST_FAILURE" as const;

export const createPostAsync = createAsyncAction(
  CREATE_POST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE
)<
  {
    title: string;
    content: string;
    introduction: string;
    categories: string[];
    preview_img: string | null;
  },
  AxiosResponse<Response>,
  AxiosError
>();

export const MODIFY_POST = "MODIFY_POST" as const;
export const MODIFY_POST_SUCCESS = "MODIFY_POST_SUCCESS" as const;
export const MODIFY_POST_FAILURE = "MODIFY_POST_FAILURE" as const;

export const modifyPostAsync = createAsyncAction(
  MODIFY_POST,
  MODIFY_POST_SUCCESS,
  MODIFY_POST_FAILURE
)<
  {
    title: string;
    content: string;
    post_idx: number;
    categories: string[] | null;
  },
  AxiosResponse<Response>,
  AxiosError
>();

export const DELETE_POST = "DELETE_POST" as const;
export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS" as const;
export const DELETE_POST_FAILURE = "DELETE_POST_FAILURE" as const;

export const deletePostAsync = createAsyncAction(
  DELETE_POST,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE
)<
  {
    post_idx: number;
  },
  AxiosResponse<Response>,
  AxiosError
>();
