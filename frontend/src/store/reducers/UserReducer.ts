import { AxiosResponse } from "axios";
import { Response } from "lib/api/Responses";
import { HYDRATE } from "next-redux-wrapper";
import {
  IAuthEmail,
  ILoginState,
  IRegisterState,
  IUserInfo,
} from "store/types/UserType";
import { ActionType, createReducer } from "typesafe-actions";
import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  MAIL_AUTH,
  MAIL_AUTH_SUCCESS,
  MAIL_AUTH_FAILURE,
  USER_INFO,
  USER_INFO_SUCCESS,
  USER_INFO_FAILURE,
  // LOGIN_CHECK_SUCCESS,
  // LOGIN_CHECK_FAILURE,
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
  [MAIL_AUTH]: (state, action) => ({
    ...state,
    mailRes: null,
    registerErr: null,
  }),
  [MAIL_AUTH_SUCCESS]: (state, action) => ({
    ...state,
    mailRes: action.payload.status,
    registerErr: null,
  }),
  [MAIL_AUTH_FAILURE]: (state, action) => ({
    ...state,
    mailRes: null,
    registerErr: action.payload,
  }),
});

const userInfoInitialState: IUserInfo = {
  userData: null,
  loginCheck: false,
  userError: null,
};

export const GetInfoReducer = createReducer<IUserInfo>(userInfoInitialState, {
  [USER_INFO]: (state, action) => ({
    ...state,
  }),
  [USER_INFO_SUCCESS]: (state, action) => ({
    ...state,
    userData: {
      name: action.payload.data.name,
      email: action.payload.data.email,
      profileImg: action.payload.data.profile,
    },
    loginCheck: true,
    userError: null,
  }),
  [USER_INFO_FAILURE]: (state, action) => ({
    ...state,
    userData: null,
    loginCheck: false,
    userError: action.payload,
  }),
});

// const loginCheckInitialState = {
//   loginCheck: false,
// };

// export const LoginCheckReducer = createReducer(loginCheckInitialState, {
//   [LOGIN_CHECK_SUCCESS]: (state, action) => ({
//     ...state,
//     loginCheck: true,
//   }),
//   [LOGIN_CHECK_FAILURE]: (state, action) => ({
//     ...state,
//     loginCheck: false,
//   }),
// });
