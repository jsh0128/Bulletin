import axios from "axios";

class PostApi {
  static getPosts: any;
  async getPosts() {
    const { data } = await axios.get("/post/getposts");

    return data;
  }
}
export default PostApi;
