import { AxiosError } from "axios";

export interface IReplyState {
  createReplyData: Response | null;
  createReplyErr: AxiosError | null;
  modifyReplyData: Response | null;
  modifyReplyErr: AxiosError | null;
  deleteReplyData: Response | null;
  deleteReplyErr: AxiosError | null;
}
