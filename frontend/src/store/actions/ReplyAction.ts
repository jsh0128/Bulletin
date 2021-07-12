import {
  CreateReplyPayload,
  DeleteReplyPayload,
  ModifyReplyPayload,
} from "assets/types/ReplyPayLoadType";
import { AxiosError } from "axios";
import { createAsyncAction } from "typesafe-actions";

export const CREATE_REPLY = "reply/CREATE_REPLY" as const;
export const CREATE_REPLY_SUCCESS = "reply/CREATE_REPLY_SUCCESS" as const;
export const CREATE_REPLY_FAILURE = "reply/CREATE_REPLY_FAILURE" as const;

export const createReplyAsync = createAsyncAction(
  CREATE_REPLY,
  CREATE_REPLY_SUCCESS,
  CREATE_REPLY_FAILURE
)<CreateReplyPayload, Response, AxiosError>();

export const MODIFY_REPLY = "reply/MODIFY_REPLY" as const;
export const MODIFY_REPLY_SUCCESS = "reply/MODIFY_REPLY_SUCCESS" as const;
export const MODIFY_REPLY_FAILURE = "reply/MODIFY_REPLY_FAILURE" as const;

export const modifyReplyAsync = createAsyncAction(
  MODIFY_REPLY,
  MODIFY_REPLY_SUCCESS,
  MODIFY_REPLY_FAILURE
)<ModifyReplyPayload, Response, AxiosError>();

export const DELETE_REPLY = "reply/DELETE_REPLY" as const;
export const DELETE_REPLY_SUCCESS = "reply/DELETE_REPLY_SUCCESS" as const;
export const DELETE_REPLY_FAILURE = "reply/DELETE_REPLY_FAILURE" as const;

export const deleteReplyAsync = createAsyncAction(
  DELETE_REPLY,
  DELETE_REPLY_SUCCESS,
  DELETE_REPLY_FAILURE
)<DeleteReplyPayload, Response, AxiosError>();
