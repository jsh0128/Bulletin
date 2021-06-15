import {
  CREATE_COMMENT,
  CREATE_COMMENT_FAILURE,
  CREATE_COMMENT_SUCCESS,
  DELETE_COMMENT,
  DELETE_COMMENT_FAILURE,
  DELETE_COMMENT_SUCCESS,
  GET_COMMENT,
  GET_COMMENT_FAILURE,
  GET_COMMENT_SUCCESS,
  MODIFY_COMMENT,
  MODIFY_COMMENT_FAILURE,
  MODIFY_COMMENT_SUCCESS,
} from "store/actions/CommentActions";
import { ICommentState } from "store/types/CommentType";
import { createReducer } from "typesafe-actions";

const commentInitialState: ICommentState = {
  getCommentData: null,
  getCommentErr: null,
  createCommentData: null,
  createCommentErr: null,
  modifyCommentData: null,
  modifyCommentErr: null,
  deleteCommentData: null,
  deleteCommentErr: null,
};

export const commentReducer = createReducer<ICommentState>(
  commentInitialState,
  {
    [GET_COMMENT]: (state, action) => ({
      ...state,
      getCommentData: state?.getCommentData,
      getCommentErr: state?.getCommentErr,
    }),
    [GET_COMMENT_SUCCESS]: (state, action) => ({
      ...state,
      getCommentData: action.payload,
      getCommentErr: null,
    }),
    [GET_COMMENT_FAILURE]: (state, action) => ({
      ...state,
      getCommentData: null,
      getCommentErr: action.payload,
    }),
    [CREATE_COMMENT]: (state, action) => ({
      ...state,
      createCommentData: null,
      createCommentErr: null,
    }),
    [CREATE_COMMENT_SUCCESS]: (state, action) => ({
      ...state,
      createCommentData: action.payload,
      createCommentErr: null,
    }),
    [CREATE_COMMENT_FAILURE]: (state, action) => ({
      ...state,
      createCommentData: null,
      createCommentErr: action.payload,
    }),
    [MODIFY_COMMENT]: (state, action) => ({
      ...state,
      modifyCommentData: null,
      modifyCommentErr: null,
    }),
    [MODIFY_COMMENT_SUCCESS]: (state, action) => ({
      ...state,
      modifyCommentData: action.payload,
      modifyCommentErr: null,
    }),
    [MODIFY_COMMENT_FAILURE]: (state, action) => ({
      ...state,
      modifyCommentData: null,
      modifyCommentErr: action.payload,
    }),
    [DELETE_COMMENT]: (state, action) => ({
      ...state,
      deleteCommentData: null,
      deleteCommentErr: null,
    }),
    [DELETE_COMMENT_SUCCESS]: (state, action) => ({
      ...state,
      deleteCommentData: action.payload,
      deleteCommentErr: null,
    }),
    [DELETE_COMMENT_FAILURE]: (state, action) => ({
      ...state,
      deleteCommentData: null,
      deleteCommentErr: action.payload,
    }),
  }
);
