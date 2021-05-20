import { all } from "redux-saga/effects";
import { postSaga } from "./PostSaga";
import { authSaga } from "./UserSaga";

export default function* rootSaga() {
  yield all([authSaga(), postSaga()]);
}
