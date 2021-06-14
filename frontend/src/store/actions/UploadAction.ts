import { AxiosError, AxiosResponse } from "axios";
import { createAsyncAction } from "typesafe-actions";
import { IUploadResponse } from "util/types/UploadResponse";

export const UPLOAD = "UPLOAD";
export const UPLOAD_SUCCESS = "UPLOAD_SUCCESS";
export const UPLOAD_FAILURE = "UPLOAD_FAILURE";

export const uploadAsync = createAsyncAction(
  UPLOAD,
  UPLOAD_SUCCESS,
  UPLOAD_FAILURE
)<{ files: File }, IUploadResponse, AxiosError>();
