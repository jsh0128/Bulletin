export interface IGetCategoryResponse extends Response {
  data: { category: string }[];
}

export interface ISearchCategoryPostResponse extends Response {
  data: ISearchCategoryPost[] | null;
}

export interface ISearchCategoryPost {
  idx: number;
  title: string;
  introduction: string;
  preview_image: string | null;
  content: string;
  created_at: string;
  views: number;
  fk_user_email: string;
}
