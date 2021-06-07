import CategoryApi from "assets/api/CategoryApi";
import createAsyncSaga from "lib/createAsyncSaga";
import { takeEvery } from "redux-saga/effects";
import {
  getCategoryAsync,
  getPostCategoryAsync,
  GET_CATEGORY,
  GET_POST_CATEGORY,
} from "store/actions/CategoryAction";

export const getCategorySaga = createAsyncSaga(
  getCategoryAsync,
  CategoryApi.getCategory
);

export const getPostCategorySaga = createAsyncSaga(
  getPostCategoryAsync,
  CategoryApi.getPostCategory
);

export function* categorySaga() {
  yield takeEvery(GET_CATEGORY, getCategorySaga);
  yield takeEvery(GET_POST_CATEGORY, getPostCategorySaga);
}
