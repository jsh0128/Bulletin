import {
  GET_POST,
  GET_POST_SUCCESS,
  GET_POST_FAILURE,
  GET_CATEGORY,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAILURE,
} from "store/actions/PostAction";
import { IGetCategoryState, IGetPostState } from "store/types/PostType";
import { createReducer } from "typesafe-actions";

const getPostInitialState: IGetPostState = {
  data: null,
  getPostErr: null,
};

export const GetPostReducer = createReducer<IGetPostState>(
  getPostInitialState,
  {
    [GET_POST]: (state, action) => ({
      ...state,
      data: null,
      getPostErr: null,
    }),
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      data: action.payload,
      getPostErr: null,
    }),
    [GET_POST_FAILURE]: (state, action) => ({
      ...state,
      data: null,
      getPostErr: action.payload,
    }),
  }
);

const getCategoryInitialState: IGetCategoryState = {
  data: null,
  getCategoryErr: null,
};

export const GetCategoryReducer = createReducer<IGetCategoryState>(
  getCategoryInitialState,
  {
    [GET_CATEGORY]: (state, action) => ({
      ...state,
      data: null,
      getPostErr: null,
    }),
    [GET_CATEGORY_SUCCESS]: (state, action) => ({
      ...state,
      data: action.payload,
      getPostErr: null,
    }),
    [GET_CATEGORY_FAILURE]: (state, action) => ({
      ...state,
      data: null,
      getPostErr: action.payload,
    }),
  }
);
