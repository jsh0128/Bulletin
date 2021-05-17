import { combineReducers } from "redux";
import { LoginReducer, RegisterReducer, MailAuthReducer } from "./UserReducer";

const rootReducer = combineReducers({
  LoginReducer,
  RegisterReducer,
  MailAuthReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
