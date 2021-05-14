import axios, { AxiosResponse } from "axios";
import { ILoginResponse } from "lib/api/Responses";
import { SERVER } from "../../config/config.json";

export type LoginPayload = {
  email: string;
  pw: string;
};

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

  register: async (
    name: string,
    email: string,
    pw: string,
    profileImg?: string
  ) => {
    const body = {
      name,
      email,
      password: pw,
      profileImg,
    };
    const { data } = await axios.post(`${SERVER}/auth/signup`, body);

    return data;
  },
};
export default AuthApi;
