import AuthApi from "assets/api/AuthApi";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  LOGIN,
  loginSuccess,
  loginFail,
  registerFail,
} from "../actions/AuthAction";
import { REGISTER, registerSuccess } from "store/actions/AuthAction";

function* tryLogin(action) {
  try {
    const data = yield call(AuthApi.login, action.email, action.password);
    yield put(loginSuccess(data.data.token));
  } catch (err) {
    yield put(loginFail(err.response.status));
  }
}
export function* handleLogin() {
  yield takeEvery(LOGIN, tryLogin);
}

function* tryRegister(action) {
  try {
    const data = yield call(
      AuthApi.register,
      action.email,
      action.password,
      action.name,
      action.profileImg
    );
    yield put(registerSuccess(data));
  } catch (err) {
    yield put(registerFail(err));
  }
}
export function* handleRegister() {
  yield takeEvery(REGISTER, tryRegister);
}
