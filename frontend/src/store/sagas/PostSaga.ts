import PostApi from "assets/api/PostApi";
import createAsyncSaga from "lib/createAsyncSaga";
import { takeEvery } from "redux-saga/effects";
import {
  createPostAsync,
  CREATE_POST,
  getPostAsync,
  GET_POST,
} from "store/actions/PostAction";

export const getPostSaga = createAsyncSaga(getPostAsync, PostApi.getPosts);
export const createPostSaga = createAsyncSaga(
  createPostAsync,
  PostApi.createPosts
);

export function* postSaga() {
  yield takeEvery(GET_POST, getPostSaga);
  yield takeEvery(CREATE_POST, createPostSaga);
}
