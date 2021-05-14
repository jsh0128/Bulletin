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
  error: null,
  data: {
    token: "",
  },
};

export const LoginReducer = createReducer<ILoginState>(loginInitialState, {
  [LOGIN]: (state, action) => ({
    ...state,
    error: null,
  }),
  [LOGIN_SUCCESS]: (state, action) => ({
    ...state,
    error: null,
    data: {
      ...state.data,
      token: action.payload.token,
    },
  }),
  [LOGIN_FAILURE]: (state, action) => ({
    ...state,
    error: action.payload,
  }),
});

const registerInitialState: IRegisterState = {
  error: null,
  res: 0,
};

export const RegisterReducer = createReducer<IRegisterState>(
  registerInitialState,
  {
    [REGISTER]: (state, action) => ({ ...state, error: null, res: null }),
    [REGISTER_SUCCESS]: (state, action) => ({
      ...state,
      res: action.payload.status,
      error: null,
    }),
    [REGISTER_FAILURE]: (state, action) => ({
      ...state,
      res: null,
      error: action.payload,
    }),
  }
);

export const a = (state = registerInitialState, action) => {
  switch (action.type) {
    case REGISTER:
      return { ...state };
    case REGISTER_SUCCESS:
      return { ...state, res: action.res };
    case REGISTER_FAILURE:
      return { ...state, err: action.err };
    default:
      return state;
  }
};
