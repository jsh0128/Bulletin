import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from "../actions/AuthAction";

const initialState = { data: {} };

export const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state };
    case LOGIN_SUCCESS:
      return { ...state, res: action.res };
    case LOGIN_FAIL:
      return { ...state, err: action.err };
    default:
      return state;
  }
};

export const RegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return { ...state };
    case REGISTER_SUCCESS:
      return { ...state, token: action.token };
    case REGISTER_FAIL:
      return { ...state, err: action.err };
    default:
      return state;
  }
};
