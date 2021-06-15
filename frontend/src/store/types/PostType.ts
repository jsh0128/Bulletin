import { AxiosError } from "axios";
import { Response } from "util/types/Response";

export interface IPostState {
  data: { res: PostState[] | PostState | null };
  getPostErr: AxiosError | null;
  createPostData: null | Response;
  createPostErr: null | AxiosError;
  modifyPostData: null | Response;
  modifyPostErr: null | AxiosError;
  deletePostData: null | Response;
  deletePostErr: null | AxiosError;
}

export interface PostState {
  category: string[];
  content: string;
  created_at: string;
  idx: number;
  introduction: string;
  preview_image: null | string;
  title: string;
  user_email: string;
  user_name: string;
}
