import {
  CreateReplyPayload,
  DeleteReplyPayload,
  ModifyReplyPayload,
} from "assets/types/ReplyPayLoadType";
import { AxiosResponse } from "axios";
import customAxios from "lib/CustomAxios";

const ReplyApi = {
  createReply: async (body: CreateReplyPayload) => {
    const { data }: AxiosResponse<Response> = await customAxios.post(
      "/reply/create",
      body
    );

    return data;
  },
  modifyReply: async (body: ModifyReplyPayload) => {
    const { data }: AxiosResponse<Response> = await customAxios.post(
      "/reply/modify",
      body
    );

    return data;
  },
  deleteReply: async ({ reply_idx }: DeleteReplyPayload) => {
    const { data }: AxiosResponse<Response> = await customAxios.get(
      `/reply/delete?reply_idx=${reply_idx}`
    );

    return data;
  },
};

export default ReplyApi;
