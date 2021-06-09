import PostApi from "assets/api/PostApi";
import createAsyncSaga from "lib/createAsyncSaga";
import { takeEvery } from "redux-saga/effects";
import {
  createPostAsync,
  CREATE_POST,
  deletePostAsync,
  DELETE_POST,
  getPostAsync,
  GET_POST,
  modifyPostAsync,
  MODIFY_POST,
} from "store/actions/PostAction";

export const getPostSaga = createAsyncSaga(getPostAsync, PostApi.getPosts);
export const createPostSaga = createAsyncSaga(
  createPostAsync,
  PostApi.createPosts
);

export const modifyPostSaga = createAsyncSaga(
  modifyPostAsync,
  PostApi.modifyPosts
);

export const deletePostSaga = createAsyncSaga(
  deletePostAsync,
  PostApi.deletePosts
);

export function* postSaga() {
  yield takeEvery(GET_POST, getPostSaga);
  yield takeEvery(CREATE_POST, createPostSaga);
  yield takeEvery(MODIFY_POST, modifyPostSaga);
  yield takeEvery(DELETE_POST, deletePostSaga);
}
