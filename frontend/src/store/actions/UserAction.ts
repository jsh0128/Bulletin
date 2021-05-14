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
  { email: string; password: string; name: string; profileImg?: string },
  { res: string },
  AxiosResponse<Response>
>();
