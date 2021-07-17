import { createAsyncAction } from "typesafe-actions";
import { AxiosError } from "axios";
import { Response } from "util/types/Response";
import { IGetCommentResponse } from "util/types/CommentResponse";

export const GET_COMMENT = "comment/GET_COMMENT" as const;
export const GET_COMMENT_SUCCESS = "comment/GET_COMMENT_SUCCESS" as const;
export const GET_COMMENT_FAILURE = "comment/GET_COMMENT_FAILURE" as const;

export const getCommentAsync = createAsyncAction(
  GET_COMMENT,
  GET_COMMENT_SUCCESS,
  GET_COMMENT_FAILURE
)<{ post_idx: number }, IGetCommentResponse, AxiosError>();

export const CREATE_COMMENT = "comment/CREATE_COMMENT" as const;
export const CREATE_COMMENT_SUCCESS = "comment/CREATE_COMMENT_SUCCESS" as const;
export const CREATE_COMMENT_FAILURE = "comment/CREATE_COMMENT_FAILURE" as const;

export const createCommentAsync = createAsyncAction(
  CREATE_COMMENT,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILURE
)<{ post_idx: number; content: string }, Response, AxiosError>();

export const MODIFY_COMMENT = "comment/MODIFY_COMMENT" as const;
export const MODIFY_COMMENT_SUCCESS = "comment/MODIFY_COMMENT_SUCCESS" as const;
export const MODIFY_COMMENT_FAILURE = "comment/MODIFY_COMMENT_FAILURE" as const;

export const modifyCommentAsync = createAsyncAction(
  MODIFY_COMMENT,
  MODIFY_COMMENT_SUCCESS,
  MODIFY_COMMENT_FAILURE
)<{ idx: number; content: string }, Response, AxiosError>();

export const DELETE_COMMENT = "comment/DELETE_COMMENT" as const;
export const DELETE_COMMENT_SUCCESS = "comment/DELETE_COMMENT_SUCCESS" as const;
export const DELETE_COMMENT_FAILURE = "comment/DELETE_COMMENT_FAILURE" as const;

export const deleteCommentAsync = createAsyncAction(
  DELETE_COMMENT,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILURE
)<{ comment_idx: number }, Response, AxiosError>();
