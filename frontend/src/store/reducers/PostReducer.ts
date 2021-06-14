import {
  GET_POST,
  GET_POST_SUCCESS,
  GET_POST_FAILURE,
  CREATE_POST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
} from "store/actions/PostAction";
import {
  IGetPostState,
  ICreatePostState,
  IModifyPostState,
  IDeletePostState,
} from "store/types/PostType";
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
      createPostData: null,
      createPostErr: null,
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

const modifyPostInitialState: IModifyPostState = {
  modifyPostData: null,
  modifyPostErr: null,
};
export const modifyPostReducer = createReducer<IModifyPostState>(
  modifyPostInitialState,
  {
    [CREATE_POST]: (state, action) => ({
      ...state,
      modifyPostData: null,
      modifyPostErr: null,
    }),
    [CREATE_POST_SUCCESS]: (state, action) => ({
      ...state,
      modifyPostData: action.payload,
      modifyPostErr: null,
    }),
    [CREATE_POST_FAILURE]: (state, action) => ({
      ...state,
      modifyPostData: null,
      modifyPostErr: action.payload,
    }),
  }
);

const deletePostInitialState: IDeletePostState = {
  deletePostData: null,
  deletePostErr: null,
};
export const deletePostReducer = createReducer<IDeletePostState>(
  deletePostInitialState,
  {
    [CREATE_POST]: (state, action) => ({
      ...state,
      deletePostData: null,
      deletePostErr: null,
    }),
    [CREATE_POST_SUCCESS]: (state, action) => ({
      ...state,
      deletePostData: action.payload,
      deletePostErr: null,
    }),
    [CREATE_POST_FAILURE]: (state, action) => ({
      ...state,
      deletePostData: null,
      deletePostErr: action.payload,
    }),
  }
);
