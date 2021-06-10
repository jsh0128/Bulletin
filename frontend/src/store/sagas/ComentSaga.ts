import CommentApi from "assets/api/CommentApi";
import createAsyncSaga from "lib/createAsyncSaga";
import { takeEvery } from "redux-saga/effects";
import {
  createCommentAsync,
  CREATE_COMMENT,
  deleteCommentAsync,
  DELETE_COMMENT,
  getCommentAsync,
  GET_COMMENT,
  modifyCommentAsync,
  MODIFY_COMMENT,
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

export function* commentSaga() {
  yield takeEvery(GET_COMMENT, getCommentSaga);
  yield takeEvery(CREATE_COMMENT, createCommentSaga);
  yield takeEvery(MODIFY_COMMENT, modifyCommentSaga);
  yield takeEvery(DELETE_COMMENT, deleteCommentSaga);
}
