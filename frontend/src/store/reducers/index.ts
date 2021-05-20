import { combineReducers } from "redux";
import {
  LoginReducer,
  RegisterReducer,
  MailAuthReducer,
  GetInfoReducer,
} from "./UserReducer";
import { GetPostReducer } from "./PostReducer";

const rootReducer = combineReducers({
  LoginReducer,
  RegisterReducer,
  MailAuthReducer,
  GetInfoReducer,
  GetPostReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
