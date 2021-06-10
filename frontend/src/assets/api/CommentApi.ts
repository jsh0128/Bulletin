import { AxiosResponse } from "axios";
import CustomAxios from "lib/CustomAxios";
import AxiosType from "util/enums/AxiosType";

const CommentApi = {
  getCommentApi: (post_idx) => {
    const body = {
      post_idx,
    };
    const data = CustomAxios({
      url: "",
      body: body,
      configCheck: false,
      type: AxiosType.GET,
    });
    return data;
  },
};
export default CommentApi;
