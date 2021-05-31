import { getPostPayload } from "assets/types/PostPayLoadType";
import axios, { AxiosResponse } from "axios";
import { IGetPostResponse } from "util/types/PostResponse";
import { SERVER } from "../../config/config.json";

const PostApi = {
  getPosts: async ({ postIdx }: getPostPayload) => {
    const { data }: AxiosResponse<IGetPostResponse> = await axios.get(
      postIdx
        ? `${SERVER}/post/getpost?idx=${postIdx}`
        : `${SERVER}/post/getpost`
    );

    return { res: data };
  },
  getCategory: async () => {
    const { data }: AxiosResponse<IGetPostResponse> = await axios.get(
      `${SERVER}/category/getcategory`
    );

    return { res: data };
  },
};

export default PostApi;
