import PostApi from "assets/api/PostApi";
import createAsyncSaga from "lib/createAsyncSaga";
import { takeEvery } from "redux-saga/effects";
import { getPostAsync, GET_POST } from "store/actions/PostAction";

export const getPostSaga = createAsyncSaga(getPostAsync, PostApi.getPosts);

export function* postSaga() {
  yield takeEvery(GET_POST, getPostSaga);
}
