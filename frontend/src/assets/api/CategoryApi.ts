import { CategorySearchPostPayload } from "assets/types/CategoryPayLoadType";
import axios, { AxiosResponse } from "axios";
import {
  IGetCategoryResponse,
  ISearchCategoryPostResponse,
} from "util/types/CategoryResponse";
import { SERVER } from "../../config/config.json";
const CategoryApi = {
  getCategory: async () => {
    const { data }: AxiosResponse<IGetCategoryResponse> = await axios.get(
      `${SERVER}/category/getcategory`
    );

    console.log(data);

    return { res: data };
  },
  searchPostCategory: async ({ category }: CategorySearchPostPayload) => {
    const {
      data,
    }: AxiosResponse<ISearchCategoryPostResponse> = await axios.get(
      `${SERVER}/category/searchPostCategory`
    );

    return { res: data };
  },
};

export default CategoryApi;
