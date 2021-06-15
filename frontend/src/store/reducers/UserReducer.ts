import { IUserState } from "store/types/UserType";
import { createReducer } from "typesafe-actions";
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
} from "../actions/UserAction";

const userInitialState: IUserState = {
  loginErr: null,
  data: {
    token: "",
  },
  registerErr: null,
  registerRes: null,
  mailSendErr: null,
  mailRes: null,
  userData: null,
  loginCheck: false,
  userError: null,
};

export const userReducer = createReducer<IUserState>(userInitialState, {
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
  [USER_INFO]: (state, action) => ({
    ...state,
  }),
  [USER_INFO_SUCCESS]: (state, action) => ({
    ...state,
    userData: {
      name: action.payload.data.name,
      email: action.payload.data.email,
      profileImg: action.payload.data.profile,
      is_admin: action.payload.data.is_admin,
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
