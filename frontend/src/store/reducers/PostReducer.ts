import {
  GET_POST,
  GET_POST_SUCCESS,
  GET_POST_FAILURE,
  CREATE_POST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
  MODIFY_POST,
  MODIFY_POST_SUCCESS,
  MODIFY_POST_FAILURE,
  DELETE_POST,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE,
} from "store/actions/PostAction";
import { IPostState } from "store/types/PostType";
import { createReducer } from "typesafe-actions";

const postInitialState: IPostState = {
  data: null,
  getPostErr: null,
  createPostData: null,
  createPostErr: null,
  modifyPostData: null,
  modifyPostErr: null,
  deletePostData: null,
  deletePostErr: null,
};

export const postReducer = createReducer<IPostState>(postInitialState, {
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
  [MODIFY_POST]: (state, action) => ({
    ...state,
    modifyPostData: null,
    modifyPostErr: null,
  }),
  [MODIFY_POST_SUCCESS]: (state, action) => ({
    ...state,
    modifyPostData: action.payload,
    modifyPostErr: null,
  }),
  [MODIFY_POST_FAILURE]: (state, action) => ({
    ...state,
    modifyPostData: null,
    modifyPostErr: action.payload,
  }),
  [DELETE_POST]: (state, action) => ({
    ...state,
    deletePostData: null,
    deletePostErr: null,
  }),
  [DELETE_POST_SUCCESS]: (state, action) => ({
    ...state,
    deletePostData: action.payload,
    deletePostErr: null,
  }),
  [DELETE_POST_FAILURE]: (state, action) => ({
    ...state,
    deletePostData: null,
    deletePostErr: action.payload,
  }),
});
