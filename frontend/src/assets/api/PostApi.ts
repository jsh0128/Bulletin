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
  getPosts: async (postIdx: GetPostPayload) => {
    const { data }: AxiosResponse<IGetPostResponse> = await customAxios.get(
      postIdx ? `/post/getPost?idx=${postIdx}` : `/post/getPost`
    );

    return { res: data?.data };
  },
  createPosts: async (body: CreatePostPayload) => {
    const { data }: AxiosResponse<any> = await customAxios.post(
      `/post/create`,
      body
    );

    return data;
  },
  modifyPosts: async (body: ModifyPostPayload) => {
    const { data }: AxiosResponse<any> = await customAxios.post(
      `/post/modify`,
      body
    );
    return data;
  },
  deletePosts: async (body: DeletePostPayload) => {
    const { data }: AxiosResponse<any> = await customAxios.post(
      `/post/delete`,
      body
    );
    return data;
  },
};

export default PostApi;
