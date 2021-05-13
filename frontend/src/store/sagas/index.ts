import { spawn } from "redux-saga/effects";
import { handleLogin, handleRegister } from "./AuthSaga";

export default function* rootSaga() {
  yield spawn(handleLogin);
  yield spawn(handleRegister);
}
