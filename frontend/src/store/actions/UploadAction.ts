import { AxiosError, AxiosResponse } from "axios";
import { createAsyncAction } from "typesafe-actions";

export const UPLOAD = "UPLOAD";
export const UPLOAD_SUCCESS = "UPLOAD_SUCCESS";
export const UPLOAD_FAILURE = "UPLOAD_FAILURE";

export const uploadAsync = createAsyncAction(
  UPLOAD,
  UPLOAD_SUCCESS,
  UPLOAD_FAILURE
)<{ file: File }, Response, AxiosError>();
