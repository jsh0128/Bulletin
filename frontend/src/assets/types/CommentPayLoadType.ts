export type GetCommentPayload = {
  post_idx: number;
};

export type CreateCommentPayload = {
  post_idx: number;
  content: string;
};

export type ModifyCommentPayload = {
  idx: number;
  content: string;
};

export type DeleteCommentPayload = {
  comment_idx: number;
};
