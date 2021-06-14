import { AxiosError } from "axios";

export interface IUploadState {
  uploadData: Response | null;
  uploadDataErr: AxiosError | null;
}
