export interface IReply {
  idx: number;
  content: string;
  created_at: Date;
  fk_comment_idx: number;
  fk_user_email: string;
  name: string;
}

export interface IComment {
  idx: number;
  content: string;
  user_email: string;
  user_name: string;
  user_profile_img: string;
  reply: IReply[];
}

export interface IGetCommentResponse extends Response {
  data: IComment[];
}
