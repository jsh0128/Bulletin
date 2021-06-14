import { all } from "redux-saga/effects";
import { categorySaga } from "./CategorySaga";
import { commentSaga } from "./ComentSaga";
import { postSaga } from "./PostSaga";
import { uploadSaga } from "./UploadSaga";
import { authSaga } from "./UserSaga";

export default function* rootSaga() {
  yield all([
    authSaga(),
    postSaga(),
    categorySaga(),
    commentSaga(),
    uploadSaga(),
  ]);
}
