import { AxiosError } from "axios";
import { Response } from "util/types/Response";

export interface IGetPostState {
  data: { res: PostState[] | PostState | null };
  getPostErr: AxiosError | null;
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

export interface ICreatePostState {
  createPostData: null | Response;
  createPostErr: null | AxiosError;
}

export interface IModifyPostState {
  modifyPostData: null | Response;
  modifyPostErr: null | AxiosError;
}

export interface IDeletePostState {
  deletePostData: null | Response;
  deletePostErr: null | AxiosError;
}
