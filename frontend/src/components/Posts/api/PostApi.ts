import axios from "common/lib/axios";
import { IResponse } from "common/types";
import { IPost } from "../PostItem/types/PostItemType";

class PostApi {
  getPosts = async () => {
    const {
      data: { data },
    }: IResponse<IPost[]> = await axios.get("/post/getPost");

    return data;
  };
}

export default new PostApi();
