import { AxiosError } from "axios";
import { IUploadResponse } from "util/types/UploadResponse";

export interface IUploadState {
  uploadData: IUploadResponse | null;
  uploadDataErr: AxiosError | null;
}
