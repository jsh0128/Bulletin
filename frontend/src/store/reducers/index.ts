import { combineReducers } from "redux";
import { LoginReducer, RegisterReducer } from "./UserReducer";

const rootReducer = combineReducers({
  LoginReducer,
  RegisterReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
