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
  createCommentApi: async (body: CreateCommentPayload) => {
    const { data } = await customAxios.post(`/comment/create`, body);

    return data;
  },
  modifyCommentApi: async (body: ModifyCommentPayload) => {
    const { data } = await customAxios.post(`/comment/modify`, body);

    return data;
  },
  deleteCommentApi: async (body: DeleteCommentPayload) => {
    const { data } = await customAxios.post(`/comment/delete`, body);

    return data;
  },
};
export default CommentApi;
