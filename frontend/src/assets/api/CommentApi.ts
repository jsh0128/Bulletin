import {
  DeleteCommentPayload,
  GetCommentPayload,
  ModifyCommentPayload,
  CreateCommentPayload,
} from "assets/types/CommentPayLoadType";
import customAxios from "lib/CustomAxios";

const CommentApi = {
  getCommentApi: async ({ post_idx }: GetCommentPayload) => {
    const { data } = await customAxios.get(
      `/comment/getComment?post_idx=${post_idx}`
    );
    return data;
  },
  createCommentApi: async ({ post_idx, content }: CreateCommentPayload) => {
    const body = {
      post_idx,
      content,
    };
    const { data } = await customAxios.post(`/comment/create`, body);

    return data;
  },
  modifyCommentApi: async ({ idx, content }: ModifyCommentPayload) => {
    const body = {
      idx,
      content,
    };
    const { data } = await customAxios.post(`/comment/modify`, body);

    return data;
  },
  deleteCommentApi: async ({ comment_idx }: DeleteCommentPayload) => {
    const body = {
      comment_idx,
    };
    const { data } = await customAxios.post(`/comment/delete`, body);

    return data;
  },
};
export default CommentApi;
