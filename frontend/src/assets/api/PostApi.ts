import { GetPostPayload } from "assets/types/PostPayLoadType";
import axios, { AxiosResponse } from "axios";
import { IGetPostResponse } from "util/types/PostResponse";
import { SERVER } from "../../config/config.json";

const PostApi = {
  getPosts: async ({ postIdx }: GetPostPayload) => {
    const { data }: AxiosResponse<IGetPostResponse> = await axios.get(
      postIdx
        ? `${SERVER}/post/getPost?idx=${postIdx}`
        : `${SERVER}/post/getPost`
    );

    return { res: data?.data };
  },
};

export default PostApi;
