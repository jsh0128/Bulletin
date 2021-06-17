import {
  CREATE_CATEGORY,
  CREATE_CATEGORY_FAILURE,
  CREATE_CATEGORY_SUCCESS,
  DELETE_CATEGORY,
  DELETE_CATEGORY_FAILURE,
  DELETE_CATEGORY_SUCCESS,
  GET_CATEGORY,
  GET_CATEGORY_FAILURE,
  GET_CATEGORY_SUCCESS,
  GET_POST_CATEGORY,
  GET_POST_CATEGORY_FAILURE,
  GET_POST_CATEGORY_SUCCESS,
  MODIFY_CATEGORY,
  MODIFY_CATEGORY_FAILURE,
  MODIFY_CATEGORY_SUCCESS,
} from "store/actions/CategoryAction";
import { ICategoryReducer } from "store/types/CategoryType";
import { createReducer } from "typesafe-actions";

const categoryInitialState: ICategoryReducer = {
  getCategoryData: null,
  getCategoryErr: null,
  getPostCategoryData: null,
  getPostCategoryErr: null,
  createCategoryData: null,
  createCategoryErr: null,
  modifyCategoryData: null,
  modifyCategoryErr: null,
  deleteCategoryData: null,
  deleteCategoryErr: null,
};

export const CategoryReducer = createReducer<ICategoryReducer>(
  categoryInitialState,
  {
    [GET_CATEGORY]: (state, action) => ({
      ...state,
      getCategoryData: null,
      getCategoryErr: null,
    }),
    [GET_CATEGORY_SUCCESS]: (state, action) => ({
      ...state,
      getCategoryData: action.payload,
      getCategoryErr: null,
    }),
    [GET_CATEGORY_FAILURE]: (state, action) => ({
      ...state,
      getCategoryData: null,
      getCategoryErr: action.payload,
    }),
    [GET_POST_CATEGORY]: (state, action) => ({
      ...state,
    }),
    [GET_POST_CATEGORY_SUCCESS]: (state, action) => ({
      ...state,
      getPostCategoryData: action.payload,
      getPostCategoryErr: null,
    }),
    [GET_POST_CATEGORY_FAILURE]: (state, action) => ({
      ...state,
      getPostCategoryData: null,
      getPostCategoryErr: action.payload,
    }),
    [CREATE_CATEGORY]: (state, action) => ({
      ...state,
    }),
    [CREATE_CATEGORY_SUCCESS]: (state, action) => ({
      ...state,
      createCategoryData: action.payload,
      createCategoryErr: null,
    }),
    [CREATE_CATEGORY_FAILURE]: (state, action) => ({
      ...state,
      createCategoryData: null,
      createCategoryErr: action.payload,
    }),
    [MODIFY_CATEGORY]: (state, action) => ({
      ...state,
    }),
    [MODIFY_CATEGORY_SUCCESS]: (state, action) => ({
      ...state,
      modifyCategoryData: action.payload,
      modifyCategoryErr: null,
    }),
    [MODIFY_CATEGORY_FAILURE]: (state, action) => ({
      ...state,
      modifyCategoryData: null,
      modifyCategoryErr: action.payload,
    }),
    [DELETE_CATEGORY]: (state, action) => ({
      ...state,
    }),
    [DELETE_CATEGORY_SUCCESS]: (state, action) => ({
      ...state,
      deleteCategoryData: action.payload,
      deleteCategoryErr: null,
    }),
    [DELETE_CATEGORY_FAILURE]: (state, action) => ({
      ...state,
      deleteCategoryData: null,
      deleteCategoryErr: action.payload,
    }),
  }
);
