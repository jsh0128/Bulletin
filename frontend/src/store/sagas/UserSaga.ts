import AuthApi from "assets/api/AuthApi";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  REGISTER,
  LOGIN,
  registerAsync,
  loginAsync,
  mailAuthAsync,
  MAILAUTH,
} from "../actions/UserAction";
import createAsyncSaga from "lib/createAsyncSaga";

export const loginSaga = createAsyncSaga(loginAsync, AuthApi.login);

export const registerSaga = createAsyncSaga(registerAsync, AuthApi.register);

export const mailAuthSaga = createAsyncSaga(mailAuthAsync, AuthApi.certMail);

export function* authSaga() {
  yield takeEvery(LOGIN, loginSaga);
  yield takeEvery(REGISTER, registerSaga);
  yield takeEvery(MAILAUTH, mailAuthSaga);
}
