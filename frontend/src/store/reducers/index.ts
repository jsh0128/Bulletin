import { combineReducers } from "redux";
import {
  LoginReducer,
  RegisterReducer,
  MailAuthReducer,
  GetInfoReducer,
} from "./UserReducer";
import { GetPostReducer } from "./PostReducer";
import { GetCategoryReducer } from "./CategoryReducer";

const rootReducer = combineReducers({
  LoginReducer,
  RegisterReducer,
  MailAuthReducer,
  GetInfoReducer,
  GetPostReducer,
  GetCategoryReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
