import ReplyApi from "assets/api/ReplyApi";
import createAsyncSaga from "lib/createAsyncSaga";
import { takeEvery } from "redux-saga/effects";
import {
  createReplyAsync,
  CREATE_REPLY,
  deleteReplyAsync,
  DELETE_REPLY,
  modifyReplyAsync,
  MODIFY_REPLY,
} from "store/actions/ReplyAction";

export const createReplySaga = createAsyncSaga(
  createReplyAsync,
  ReplyApi.createReply
);

export const modifyReplySaga = createAsyncSaga(
  modifyReplyAsync,
  ReplyApi.modifyReply
);

export const deleteReplySaga = createAsyncSaga(
  deleteReplyAsync,
  ReplyApi.deleteReply
);

export function* replySaga() {
  yield takeEvery(CREATE_REPLY, createReplySaga);
  yield takeEvery(MODIFY_REPLY, modifyReplySaga);
  yield takeEvery(DELETE_REPLY, deleteReplySaga);
}
