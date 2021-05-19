import { combineReducers } from "redux";
import {
  LoginReducer,
  RegisterReducer,
  MailAuthReducer,
  GetInfoReducer,
  // LoginCheckReducer,
} from "./UserReducer";

const rootReducer = combineReducers({
  LoginReducer,
  RegisterReducer,
  MailAuthReducer,
  GetInfoReducer,
  // LoginCheckReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
