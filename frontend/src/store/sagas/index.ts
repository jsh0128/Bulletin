import { all } from "redux-saga/effects";
import { authSaga } from "./UserSaga";

export default function* rootSaga() {
  yield all([authSaga()]);
}
