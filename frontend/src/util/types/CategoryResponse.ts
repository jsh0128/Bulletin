export interface IGetCategoryResponse extends Response {
  data: { category: string; idx: number }[] | null;
}

export interface ISearchCategoryPostResponse extends Response {
  data: ISearchCategoryPost[] | null;
}

export interface ISearchCategoryPost {
  idx: number;
  title: string;
  content: string;
  category: string[];
  created_at: string;
  introduction: string;
  preview_image: null | string;
  user_email: string;
  user_name: string;
}
