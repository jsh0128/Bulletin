import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL } from "../actions/index";

const initialState = { data: {} };

export const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state };
    case LOGIN_SUCCESS:
      console.log(action.token);
      return { ...state, token: action.token };
    case LOGIN_FAIL:
      return { ...state, err: action.err };
    default:
      return state;
  }
};
