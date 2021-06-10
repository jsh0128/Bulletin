import {
  DeleteCommentPayload,
  GetCommentPayload,
  ModifyCommentPayload,
  CreateCommentPayload,
} from "assets/types/CommentPayLoadType";
import CustomAxios from "lib/CustomAxios";
import AxiosType from "util/enums/AxiosType";

const CommentApi = {
  getCommentApi: ({ post_idx }: GetCommentPayload) => {
    const data = CustomAxios({
      url: `/comment/getComment?post_idx=${post_idx}`,
      configCheck: false,
      type: AxiosType.GET,
    });
    return data;
  },
  createCommentApi: ({ post_idx, content }: CreateCommentPayload) => {
    const body = {
      post_idx,
      content,
    };
    const data = CustomAxios({
      url: "/comment/create",
      body: body,
      configCheck: true,
      type: AxiosType.POST,
    });
    return data;
  },
  modifyCommentApi: ({ idx, content }: ModifyCommentPayload) => {
    const body = {
      idx,
      content,
    };
    const data = CustomAxios({
      url: "/comment/create",
      body: body,
      configCheck: true,
      type: AxiosType.POST,
    });
    return data;
  },
  deleteCommentApi: ({ comment_idx }: DeleteCommentPayload) => {
    const body = {
      comment_idx,
    };
    const data = CustomAxios({
      url: "/comment/delete",
      body: body,
      configCheck: true,
      type: AxiosType.POST,
    });
    return data;
  },
};
export default CommentApi;
