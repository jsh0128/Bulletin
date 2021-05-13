import { combineReducers } from "redux";
import { LoginReducer, RegisterReducer } from "./AuthReducer";

const rootReducer = combineReducers({
  LoginReducer,
  RegisterReducer,
});

export default rootReducer;
