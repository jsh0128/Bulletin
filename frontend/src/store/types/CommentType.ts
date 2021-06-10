import { AxiosError } from "axios";
import { Response } from "util/types/Response";

export interface IGetCommentState {
  getCommentData: { data: CommentState[] | null };
  getCommentErr: AxiosError | null;
}
export interface ICreateCommentState {
  createCommentData: Response | null;
  createCommentErr: AxiosError | null;
}
export interface IModifyCommentState {
  modifyCommentData: Response | null;
  modifyCommentErr: AxiosError | null;
}
export interface IDeleteCommentState {
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
