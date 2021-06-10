import CommentApi from "assets/api/CommentApi";
import createAsyncSaga from "lib/createAsyncSaga";
import {
  createCommentAsync,
  deleteCommentAsync,
  getCommentAsync,
  modifyCommentAsync,
} from "store/actions/CommentActions";

export const getCommentSaga = createAsyncSaga(
  getCommentAsync,
  CommentApi.getCommentApi
);

export const createCommentSaga = createAsyncSaga(
  createCommentAsync,
  CommentApi.createCommentApi
);

export const modifyCommentSaga = createAsyncSaga(
  modifyCommentAsync,
  CommentApi.modifyCommentApi
);

export const deleteCommentSaga = createAsyncSaga(
  deleteCommentAsync,
  CommentApi.deleteCommentApi
);
