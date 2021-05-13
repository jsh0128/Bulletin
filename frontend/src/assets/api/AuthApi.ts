import axios from "axios";
import { SERVER } from "../../config/config.json";

const AuthApi = {
  login: async (email: string, pw: string) => {
    const body = {
      email,
      password: pw,
    };
    const { data } = await axios.post(`${SERVER}/auth/signin`, body);
    return data;
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
