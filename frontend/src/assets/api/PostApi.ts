import { getPostPayload } from "assets/types/PostPayLoadType";
import axios, { AxiosResponse } from "axios";
import { IGetPostResponse } from "util/types/PostResponse";
import { SERVER } from "../../config/config.json";

const PostApi = {
  getPosts: async ({ postIdx }: getPostPayload) => {
    const { data }: AxiosResponse<IGetPostResponse> = await axios.get(
      postIdx
        ? `${SERVER}/post/getPost?idx=${postIdx}`
        : `${SERVER}/post/getPost`
    );

    console.log({ res: data?.data });
    return { res: data?.data };
  },
};

export default PostApi;
