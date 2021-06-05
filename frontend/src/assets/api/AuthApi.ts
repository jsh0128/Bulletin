import {
  CertMailPayload,
  LoginPayload,
  RegisterPayload,
} from "assets/types/AuthPayLoadTypes";
import axios, { AxiosResponse } from "axios";
import { ILoginResponse } from "util/types/Response";
import { SERVER } from "../../config/config.json";

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
    const { data } = await axios.post(`${SERVER}/auth/signup`, body);

    return data;
  },
  certMail: async ({ email }: CertMailPayload) => {
    const body = {
      email,
    };
    const { data } = await axios.post(`${SERVER}/auth/emailCode`, body);

    return data;
  },
  getInfo: async ({}) => {
    let config = {};
    if (localStorage.getItem("access_token")) {
      config = {
        headers: {
          token: `${localStorage.getItem("access_token")}`,
        },
      };
    }

    const { data } = await axios.get(`${SERVER}/auth/getInfo`, config);
    return data;
  },
};
export default AuthApi;
