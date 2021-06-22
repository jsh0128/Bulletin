import {
  CertMailPayload,
  ChangeInfoPayload,
  GithubAuthPayload,
  LoginPayload,
  RegisterPayload,
} from "assets/types/AuthPayLoadTypes";
import axios, { AxiosResponse } from "axios";
import { IGetInfoResponse, ILoginResponse } from "util/types/Response";
import { SERVER } from "../../config/config.json";
import { Response } from "util/types/Response";
import customAxios from "lib/CustomAxios";
import { sha512 } from "js-sha512";

const AuthApi = {
  login: async ({ email, pw }: LoginPayload) => {
    const body = {
      email,
      password: sha512(pw),
    };
    const { data }: AxiosResponse<ILoginResponse> = await axios.post(
      `${SERVER}/auth/signin`,
      body
    );

    return data.data;
  },

  register: async ({
    name,
    email,
    password,
    profileImg,
    authCode,
  }: RegisterPayload) => {
    const body = {
      name,
      email,
      password: sha512(password),
      profileImg,
      certCode: authCode,
    };
    const { data }: AxiosResponse<Response> = await axios.post(
      `${SERVER}/auth/signup`,
      body
    );

    return data;
  },
  certMail: async ({ email }: CertMailPayload) => {
    const body = {
      email,
    };
    const { data }: AxiosResponse<Response> = await axios.post(
      `${SERVER}/auth/emailCode`,
      body
    );

    return data;
  },
  getInfo: async () => {
    const { data }: AxiosResponse<IGetInfoResponse> = await customAxios.get(
      `/auth/getInfo`
    );
    return data;
  },
  changeInfo: async ({ name, password, profile_img }: ChangeInfoPayload) => {
    const body = {
      name: name,
      password: password ? sha512(password) : null,
      profile_img: profile_img,
    };
    const { data }: AxiosResponse<Response> = await customAxios.post(
      `/auth/changeInfo`,
      body
    );
    return data;
  },
  githubAuth: async ({ code }: GithubAuthPayload) => {
    const body = { code };
    const { data }: AxiosResponse<ILoginResponse> = await customAxios.post(
      "/auth/githubAuth",
      body
    );
    return data;
  },
};
export default AuthApi;
