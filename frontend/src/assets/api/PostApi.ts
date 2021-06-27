import {
  CreatePostPayload,
  DeletePostPayload,
  GetPostPayload,
  ModifyPostPayload,
} from "assets/types/PostPayLoadType";
import { AxiosResponse } from "axios";
import customAxios from "lib/CustomAxios";
import { IGetPostResponse } from "util/types/PostResponse";

const PostApi = {
  getPosts: async ({ postIdx }: GetPostPayload) => {
    const { data }: AxiosResponse<IGetPostResponse> = await customAxios.get(
      postIdx ? `/post/getPost?idx=${postIdx}` : `/post/getPost`
    );

    return { res: data?.data };
  },
  createPosts: async ({
    title,
    content,
    introduction,
    categories,
    preview_img,
  }: CreatePostPayload) => {
    const body = {
      title,
      content,
      introduction,
      categories,
      preview_img,
    };

    const { data }: AxiosResponse<any> = await customAxios.post(
      `/post/create`,
      body
    );

    return data;
  },
  modifyPosts: async ({
    title,
    content,
    post_idx,
    categories,
  }: ModifyPostPayload) => {
    const body = {
      title: title,
      content: content,
      categories: categories,
      post_idx: post_idx,
    };
    const { data }: AxiosResponse<any> = await customAxios.post(
      `/post/modify`,
      body
    );
    return data;
  },
  deletePosts: async ({ post_idx }: DeletePostPayload) => {
    const body = { post_idx };

    const { data }: AxiosResponse<any> = await customAxios.post(
      `/post/delete`,
      body
    );
    return data;
  },
};

export default PostApi;
