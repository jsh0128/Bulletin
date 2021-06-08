import {
  GET_POST,
  GET_POST_SUCCESS,
  GET_POST_FAILURE,
  CREATE_POST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
} from "store/actions/PostAction";
import { IGetPostState, ICreatePostState } from "store/types/PostType";
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

const createPostInitialState: ICreatePostState = {
  createPostData: null,
  createPostErr: null,
};

export const CreatePostReducer = createReducer<ICreatePostState>(
  createPostInitialState,
  {
    [CREATE_POST]: (state, action) => ({
      ...state,
      data: null,
      getPostErr: null,
    }),
    [CREATE_POST_SUCCESS]: (state, action) => ({
      ...state,
      createPostData: action.payload,
      createPostErr: null,
    }),
    [CREATE_POST_FAILURE]: (state, action) => ({
      ...state,
      createPostData: null,
      createPostErr: action.payload,
    }),
  }
);
