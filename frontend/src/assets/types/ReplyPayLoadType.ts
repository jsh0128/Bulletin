export type CreateReplyPayload = {
  comment_idx: number;
  content: string;
};
export type ModifyReplyPayload = {
  reply_idx: number;
  content: string;
};
export type DeleteReplyPayload = {
  reply_idx: number;
};
