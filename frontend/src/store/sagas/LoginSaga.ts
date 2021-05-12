import AuthApi from "assets/api/AuthApi";
import { call, put, takeEvery } from "redux-saga/effects";
import { LOGIN, loginSuccess, loginFail } from "../actions";

function* tryLogin(action) {
  try {
    const data = yield call(AuthApi.login, "junghunsung01@gmail.com", "1234");
    yield put(loginSuccess(data.data.token));
  } catch (err) {
    yield put(loginFail(err.response));
  }
}
export default function* handleLogin() {
  yield takeEvery(LOGIN, tryLogin);
}
