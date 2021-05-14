import AuthApi from "assets/api/AuthApi";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  REGISTER,
  LOGIN,
  registerAsync,
  loginAsync,
} from "../actions/UserAction";
import createAsyncSaga from "lib/createAsyncSaga";

export const loginSaga = createAsyncSaga(loginAsync, AuthApi.login);

function* registerSaga(action) {
  try {
    const data = yield call(
      AuthApi.register,
      action.email,
      action.password,
      action.name,
      action.profileImg
    );
    console.log(data);
    yield put(registerAsync.success(data));
  } catch (err) {
    yield put(registerAsync.failure(err));
  }
}

export function* authSaga() {
  yield takeEvery(LOGIN, loginSaga);
  yield takeEvery(REGISTER, registerSaga);
}
