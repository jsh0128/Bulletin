import { AxiosResponse } from "axios";
import { Response } from "lib/api/Responses";
import { HYDRATE } from "next-redux-wrapper";
import { IAuthEmail, ILoginState, IRegisterState } from "store/types/UserType";
import { ActionType, createReducer } from "typesafe-actions";
import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  MAILAUTH,
  MAILAUTH_SUCCESS,
  MAILAUTH_FAILURE,
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
  registerRes: null,
};

export const RegisterReducer = createReducer<IRegisterState>(
  registerInitialState,
  {
    [REGISTER]: (state, action) => ({
      ...state,
      registerErr: null,
      registerRes: null,
    }),
    [REGISTER_SUCCESS]: (state, action) => ({
      ...state,
      registerRes: action.payload.status,
      registerErr: null,
    }),
    [REGISTER_FAILURE]: (state, action) => ({
      ...state,
      registerRes: null,
      registerErr: action.payload,
    }),
  }
);

const mailAuthInitialState: IAuthEmail = {
  mailSendErr: null,
  mailRes: null,
};

export const MailAuthReducer = createReducer<IAuthEmail>(mailAuthInitialState, {
  [MAILAUTH]: (state, action) => ({
    ...state,
    mailRes: null,
    registerErr: null,
  }),
  [MAILAUTH_SUCCESS]: (state, action) => ({
    ...state,
    mailRes: action.payload.status,
    registerErr: null,
  }),
  [MAILAUTH_FAILURE]: (state, action) => ({
    ...state,
    mailRes: null,
    registerErr: action.payload,
  }),
});
