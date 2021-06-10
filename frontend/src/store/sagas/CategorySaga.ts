import CategoryApi from "assets/api/CategoryApi";
import createAsyncSaga from "lib/createAsyncSaga";
import { takeEvery } from "redux-saga/effects";
import {
  createCategoryAsync,
  CREATE_CATEGORY,
  deleteCategoryAsync,
  DELETE_CATEGORY,
  getCategoryAsync,
  getPostCategoryAsync,
  GET_CATEGORY,
  GET_POST_CATEGORY,
  modifyCategoryAsync,
  MODIFY_CATEGORY,
} from "store/actions/CategoryAction";

export const getCategorySaga = createAsyncSaga(
  getCategoryAsync,
  CategoryApi.getCategory
);

export const getPostCategorySaga = createAsyncSaga(
  getPostCategoryAsync,
  CategoryApi.getPostCategory
);

export const createCategorySaga = createAsyncSaga(
  createCategoryAsync,
  CategoryApi.createCategory
);

export const modifyCategorySaga = createAsyncSaga(
  modifyCategoryAsync,
  CategoryApi.modifyCategory
);

export const deleteCategorySaga = createAsyncSaga(
  deleteCategoryAsync,
  CategoryApi.deleteCategory
);

export function* categorySaga() {
  yield takeEvery(GET_CATEGORY, getCategorySaga);
  yield takeEvery(GET_POST_CATEGORY, getPostCategorySaga);
  yield takeEvery(CREATE_CATEGORY, createCategorySaga);
  yield takeEvery(MODIFY_CATEGORY, modifyCategorySaga);
  yield takeEvery(DELETE_CATEGORY, deleteCategorySaga);
}
