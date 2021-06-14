import {
  CertMailPayload,
  LoginPayload,
  RegisterPayload,
} from "assets/types/AuthPayLoadTypes";
import axios, { AxiosResponse } from "axios";
import { IGetInfoResponse, ILoginResponse } from "util/types/Response";
import { SERVER } from "../../config/config.json";
import { Response } from "util/types/Response";
import customAxios from "lib/CustomAxios";

const AuthApi = {
  login: async ({ email, pw }: LoginPayload) => {
    const body = {
      email,
      password: pw,
    };
    const { data }: AxiosResponse<ILoginResponse> = await axios.post(
      `${SERVER}/auth/signin`,
      body
    );
    return { token: data.data.token };
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
      password: password,
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
      `${SERVER}/auth/getInfo`
    );
    return data;
  },
};
export default AuthApi;
