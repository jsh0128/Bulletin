export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const login = (email: string, password: string) => {
  return {
    type: LOGIN,
    loginCheck: false,
    email,
    password,
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

export const REGISTER = "REGISTER";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

export const register = (
  email: string,
  password: string,
  name: string,
  profileImg?: string
) => {
  return {
    type: REGISTER,
    email,
    password,
    name,
    profileImg,
  };
};
export const registerSuccess = (res) => {
  return {
    type: REGISTER_SUCCESS,
    res,
  };
};
export const registerFail = (err) => {
  return {
    type: REGISTER_FAIL,
    err,
  };
};
