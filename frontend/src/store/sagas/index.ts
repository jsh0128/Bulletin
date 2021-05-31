import { all } from "redux-saga/effects";
import { categorySaga } from "./CategorySaga";
import { postSaga } from "./PostSaga";
import { authSaga } from "./UserSaga";

export default function* rootSaga() {
  yield all([authSaga(), postSaga(), categorySaga()]);
}
