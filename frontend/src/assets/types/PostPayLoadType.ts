export type GetPostPayload = {
  postIdx?: number;
};
export type CreatePostPayload = {
  title: string;
  content: string;
  introduction: string;
  categories: string[];
  preview_img: string | null;
};
export type ModifyPostPayload = {
  title: string;
  content: string;
  post_idx: number;
  categories: string[] | null;
};
export type DeletePostPayload = {
  post_idx: number;
};
