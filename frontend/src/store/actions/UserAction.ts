import {
  CertMailPayload,
  ChangeInfoPayload,
  GithubAuthPayload,
  RegisterPayload,
} from "assets/types/AuthPayLoadTypes";
import { AxiosError } from "axios";
import { createAsyncAction } from "typesafe-actions";
import {
  IGetInfoResponse,
  ILoginResponse,
  Response,
} from "util/types/Response";

export const LOGIN = "user/LOGIN" as const;
export const LOGIN_SUCCESS = "user/LOGIN_SUCCESS" as const;
export const LOGIN_FAILURE = "user/LOGIN_FAILURE" as const;

export const loginAsync = createAsyncAction(
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
)<{ email: string; pw: string }, { token: string }, AxiosError>();

export const REGISTER = "user/REGISTER" as const;
export const REGISTER_SUCCESS = "user/REGISTER_SUCCESS" as const;
export const REGISTER_FAILURE = "user/REGISTER_FAILURE" as const;

export const registerAsync = createAsyncAction(
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
)<RegisterPayload, Response, AxiosError>();

export const MAIL_AUTH = "user/MAIL_AUTH" as const;
export const MAIL_AUTH_SUCCESS = "user/MAIL_AUTH_SUCCESS" as const;
export const MAIL_AUTH_FAILURE = "user/MAIL_AUTH_FAILURE" as const;
export const mailAuthAsync = createAsyncAction(
  MAIL_AUTH,
  MAIL_AUTH_SUCCESS,
  MAIL_AUTH_FAILURE
)<CertMailPayload, Response, AxiosError>();

export const USER_INFO = "user/USER_INFO" as const;
export const USER_INFO_SUCCESS = "user/USER_INFO_SUCCESS" as const;
export const USER_INFO_FAILURE = "user/USER_INFO_FAILURE" as const;

export const getInfoAsync = createAsyncAction(
  USER_INFO,
  USER_INFO_SUCCESS,
  USER_INFO_FAILURE
)<void, IGetInfoResponse, AxiosError>();

export const MODIFY_INFO = "user/MODIFY_INFO" as const;
export const MODIFY_INFO_SUCCESS = "user/MODIFY_INFO_SUCCESS" as const;
export const MODIFY_INFO_FAILURE = "user/MODIFY_INFO_FAILURE" as const;

export const modifyInfoAsync = createAsyncAction(
  MODIFY_INFO,
  MODIFY_INFO_SUCCESS,
  MODIFY_INFO_FAILURE
)<ChangeInfoPayload, Response, AxiosError>();

export const GITHUB_LOGIN = "GITHUB_LOGIN" as const;
export const GITHUB_LOGIN_SUCCESS = "GITHUB_LOGIN_SUCCESS" as const;
export const GITHUB_LOGIN_FAILURE = "GITHUB_LOGIN_FAILURE" as const;

export const githubLoginAsync = createAsyncAction(
  GITHUB_LOGIN,
  GITHUB_LOGIN_SUCCESS,
  GITHUB_LOGIN_FAILURE
)<GithubAuthPayload, { token: string }, AxiosError>();

export const GITHUB_REGISTER = "GITHUB_REGISTER" as const;
export const GITHUB_REGISTER_SUCCESS = "GITHUB_REGISTER_SUCCESS" as const;
export const GITHUB_REGISTER_FAILURE = "GITHUB_REGISTER_FAILURE" as const;

export const githubRegisterAsync = createAsyncAction(
  GITHUB_REGISTER,
  GITHUB_REGISTER_SUCCESS,
  GITHUB_REGISTER_FAILURE
)<GithubAuthPayload, Response, AxiosError>();

export const logout = () => ({
  type: USER_INFO_FAILURE,
  userError: null,
  loginCheck: false,
  userData: null,
});
