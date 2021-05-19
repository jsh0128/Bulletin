import { AxiosError, AxiosResponse } from "axios";
import { Response } from "lib/api/Responses";
import { createAsyncAction } from "typesafe-actions";

export const LOGIN = "user/LOGIN" as const;
export const LOGIN_SUCCESS = "user/LOGIN_SUCCESS" as const;
export const LOGIN_FAILURE = "user/LOGIN_FAILURE" as const;

export const loginAsync = createAsyncAction(
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
)<{ email: string; pw: string }, { token: string }, AxiosResponse<Response>>();

export const REGISTER = "user/REGISTER";
export const REGISTER_SUCCESS = "user/REGISTER_SUCCESS";
export const REGISTER_FAILURE = "user/REGISTER_FAILURE";

export const registerAsync = createAsyncAction(
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
)<
  {
    email: string;
    password: string;
    name: string;
    profileImg?: string;
    authCode: number;
  },
  { res: string },
  AxiosResponse<Response>
>();

export const MAIL_AUTH = "user/MAIL_AUTH";
export const MAIL_AUTH_SUCCESS = "user/MAIL_AUTH_SUCCESS";
export const MAIL_AUTH_FAILURE = "user/MAIL_AUTH_FAILURE";
export const mailAuthAsync = createAsyncAction(
  MAIL_AUTH,
  MAIL_AUTH_SUCCESS,
  MAIL_AUTH_FAILURE
)<{ email: string }, { res: string }, AxiosResponse<Response>>();

export const USER_INFO = "user/USER_INFO";
export const USER_INFO_SUCCESS = "user/USER_INFO_SUCCESS";
export const USER_INFO_FAILURE = "user/USER_INFO_FAILURE";

export const getInfoAsync = createAsyncAction(
  USER_INFO,
  USER_INFO_SUCCESS,
  USER_INFO_FAILURE
)<{}, { res: string }, AxiosResponse<Response>>();

export const logOut = () => ({
  type: USER_INFO_FAILURE,
  userError: null,
});
