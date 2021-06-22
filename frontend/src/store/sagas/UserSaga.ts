import AuthApi from "assets/api/AuthApi";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  REGISTER,
  LOGIN,
  registerAsync,
  loginAsync,
  mailAuthAsync,
  MAIL_AUTH,
  getInfoAsync,
  USER_INFO,
  modifyInfoAsync,
  MODIFY_INFO,
  githubAuthAsync,
  GITHUB_AUTH,
} from "../actions/UserAction";
import createAsyncSaga from "lib/createAsyncSaga";

export const loginSaga = createAsyncSaga(loginAsync, AuthApi.login);

export const registerSaga = createAsyncSaga(registerAsync, AuthApi.register);

export const mailAuthSaga = createAsyncSaga(mailAuthAsync, AuthApi.certMail);

export const userInfoSaga = createAsyncSaga(getInfoAsync, AuthApi.getInfo);

export const modifyInfoSaga = createAsyncSaga(
  modifyInfoAsync,
  AuthApi.changeInfo
);

export const githubAuthSaga = createAsyncSaga(
  githubAuthAsync,
  AuthApi.githubAuth
);

export function* authSaga() {
  yield takeEvery(LOGIN, loginSaga);
  yield takeEvery(REGISTER, registerSaga);
  yield takeEvery(MAIL_AUTH, mailAuthSaga);
  yield takeEvery(USER_INFO, userInfoSaga);
  yield takeEvery(MODIFY_INFO, modifyInfoSaga);
  yield takeEvery(GITHUB_AUTH, githubAuthSaga);
}
