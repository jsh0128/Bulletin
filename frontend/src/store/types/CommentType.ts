import { AxiosError } from "axios";
import { Response } from "util/types/Response";

export interface ICommentState {
  getCommentData: { data: CommentState[] | null };
  getCommentErr: AxiosError | null;
  createCommentData: Response | null;
  createCommentErr: AxiosError | null;
  modifyCommentData: Response | null;
  modifyCommentErr: AxiosError | null;
  deleteCommentData: Response | null;
  deleteCommentErr: AxiosError | null;
}

export interface CommentState {
  idx: number;
  content: string;
  user_email: string;
  user_name: string;
  user_profile_img: string;
  created_at: string;
}
