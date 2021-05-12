export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const login = () => {
  return {
    type: LOGIN,
    loginCheck: false,
  };
};

export const loginSuccess = (token) => {
  return {
    type: LOGIN_SUCCESS,
    loginCheck: true,
    token: token,
  };
};

export const loginFail = (err) => {
  return {
    type: LOGIN_FAIL,
    loginCheck: false,
    err: err,
  };
};
