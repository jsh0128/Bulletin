import { takeEvery } from "@redux-saga/core/effects";
import UploadApi from "assets/api/Upload";
import createAsyncSaga from "lib/createAsyncSaga";
import { UPLOAD, uploadAsync } from "store/actions/UploadAction";

export const UploadSaga = createAsyncSaga(uploadAsync, UploadApi.upload);

export function* uploadSaga() {
  yield takeEvery(UPLOAD, UploadSaga);
}
