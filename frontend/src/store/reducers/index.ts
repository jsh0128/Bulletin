import { combineReducers } from "redux";
import {
  LoginReducer,
  RegisterReducer,
  MailAuthReducer,
  GetInfoReducer,
} from "./UserReducer";

const rootReducer = combineReducers({
  LoginReducer,
  RegisterReducer,
  MailAuthReducer,
  GetInfoReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
