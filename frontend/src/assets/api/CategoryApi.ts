import {
  CategorySearchPostPayload,
  CreateCategoryPayload,
  ModifyCategoryPayload,
  DeleteCategoryPayload,
} from "assets/types/CategoryPayLoadType";
import axios, { AxiosResponse } from "axios";
import {
  IGetCategoryResponse,
  ISearchCategoryPostResponse,
} from "util/types/CategoryResponse";
import { SERVER } from "../../config/config.json";
const CategoryApi = {
  getCategory: async () => {
    const { data }: AxiosResponse<IGetCategoryResponse> = await axios.get(
      `${SERVER}/category/getCategory`
    );

    return { res: data?.data };
  },
  searchPostCategory: async ({ category }: CategorySearchPostPayload) => {
    const {
      data,
    }: AxiosResponse<ISearchCategoryPostResponse> = await axios.get(
      `${SERVER}/category/searchPostCategory?category${category}`
    );

    return { res: data };
  },
  createCategory: async ({ category }: CreateCategoryPayload) => {
    const body = {
      category,
    };
    const { data }: AxiosResponse<Response> = await axios.post(
      `${SERVER}/category/create`,
      body
    );

    return data;
  },
  modifyCategory: async ({ category, changeName }: ModifyCategoryPayload) => {
    const body = {
      category_name: category,
      change_name: changeName,
    };
    const { data }: AxiosResponse<Response> = await axios.post(
      `${SERVER}/category/modify`,
      body
    );

    return data;
  },
  deleteCategory: async ({ category }: DeleteCategoryPayload) => {
    const body = {
      category,
    };
    const { data }: AxiosResponse<Response> = await axios.post(
      `${SERVER}/category/delete`,
      body
    );

    return data;
  },
};

export default CategoryApi;
