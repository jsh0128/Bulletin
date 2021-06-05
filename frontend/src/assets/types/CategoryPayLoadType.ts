export type CategorySearchPostPayload = {
  category: number;
};

export type CreateCategoryPayload = {
  category: string;
};
export type ModifyCategoryPayload = {
  category: string;
  changeName: string;
};
export type DeleteCategoryPayload = {
  category: string;
};
