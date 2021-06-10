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
import {
  ICreateCommentState,
  IDeleteCommentState,
  IGetCommentState,
  IModifyCommentState,
} from "store/types/CommentType";
import { createReducer } from "typesafe-actions";

const getCommentInitialState: IGetCommentState = {
  getCommentData: null,
  getCommentErr: null,
};

export const GetCommentReducer = createReducer<IGetCommentState>(
  getCommentInitialState,
  {
    [GET_COMMENT]: (state, action) => ({
      ...state,
      getCommentData: null,
      getCommentErr: null,
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
  }
);

const createCommentInitialState: ICreateCommentState = {
  createCommentData: null,
  createCommentErr: null,
};

export const createCommentReducer = createReducer<ICreateCommentState>(
  createCommentInitialState,
  {
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
  }
);

const modifyCommentInitialState: IModifyCommentState = {
  modifyCommentData: null,
  modifyCommentErr: null,
};

export const modifyCommentReducer = createReducer<IModifyCommentState>(
  modifyCommentInitialState,
  {
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
  }
);

const deleteCommentInitialState: IDeleteCommentState = {
  deleteCommentData: null,
  deleteCommentErr: null,
};

export const deleteCommentReducer = createReducer<IDeleteCommentState>(
  deleteCommentInitialState,
  {
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
