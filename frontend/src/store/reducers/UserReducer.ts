import { AxiosResponse } from "axios";
import { Response } from "lib/api/Responses";
import { HYDRATE } from "next-redux-wrapper";
import { ILoginState, IRegisterState } from "store/types/UserType";
import { ActionType, createReducer } from "typesafe-actions";
import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
} from "../actions/UserAction";

const loginInitialState: ILoginState = {
  loginErr: null,
  data: {
    token: "",
  },
};

export const LoginReducer = createReducer<ILoginState>(loginInitialState, {
  [LOGIN]: (state, action) => ({
    ...state,
    loginErr: null,
  }),
  [LOGIN_SUCCESS]: (state, action) => ({
    ...state,
    loginErr: null,
    data: {
      ...state.data,
      token: action.payload.token,
    },
  }),
  [LOGIN_FAILURE]: (state, action) => ({
    ...state,
    loginErr: action.payload,
  }),
});

const registerInitialState: IRegisterState = {
  registerErr: null,
  res: 0,
};

export const RegisterReducer = createReducer<IRegisterState>(
  registerInitialState,
  {
    [REGISTER]: (state, action) => ({
      ...state,
      registerErr: null,
      res: null,
    }),
    [REGISTER_SUCCESS]: (state, action) => ({
      ...state,
      res: action.payload.status,
      registerErr: null,
    }),
    [REGISTER_FAILURE]: (state, action) => ({
      ...state,
      res: null,
      registerErr: action.payload,
    }),
  }
);
