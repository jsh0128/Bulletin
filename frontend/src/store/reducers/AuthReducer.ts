import { AxiosResponse } from "axios";
import { Response } from "lib/api/Responses";
import { HYDRATE } from "next-redux-wrapper";
import { ActionType, createReducer } from "typesafe-actions";
import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
} from "../actions/UserAction";

export interface IAuthState {
  error: AxiosResponse<Response> | null;
  data: {
    token: string;
  };
}

const initialState: IAuthState = {
  error: null,
  data: {
    token: "",
  },
};

export const LoginReducer = createReducer<IAuthState>(initialState, {
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

export const RegisterReducer = (state = initialState, action) => {
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
