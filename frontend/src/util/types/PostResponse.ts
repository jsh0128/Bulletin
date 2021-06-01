export interface IGetPostResponse extends Response {
  data: IGetPost[] | IGetPost;
}

export interface IGetPost {
  category: string[];
  content: string;
  created_at: string;
  idx: number;
  introduction: string;
  preview_image: null | string;
  title: string;
  user_email: string;
  user_name: string;
}
