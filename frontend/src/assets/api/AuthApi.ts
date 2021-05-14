import { LoginPayload, RegisterPayload } from "assets/types/AuthPayLoadTypes";
import axios, { AxiosResponse } from "axios";
import { ILoginResponse } from "lib/api/Responses";
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

  register: async ({ name, email, password, profileImg }: RegisterPayload) => {
    const body = {
      name,
      email,
      password: password,
      profileImg,
    };
    const { data } = await axios.post(`${SERVER}/auth/signup`, body);

    return data;
  },
};
export default AuthApi;
