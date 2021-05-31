import CategoryApi from "assets/api/CategoryApi";
import createAsyncSaga from "lib/createAsyncSaga";
import { takeEvery } from "redux-saga/effects";
import { getCategoryAsync, GET_CATEGORY } from "store/actions/CategoryAction";

export const getCategorySaga = createAsyncSaga(
  getCategoryAsync,
  CategoryApi.getCategory
);

export function* categorySaga() {
  yield takeEvery(GET_CATEGORY, getCategorySaga);
}
