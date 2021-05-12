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

  register: async (name: string, email: string, pw: string, birth: string) => {
    const body = {
      birth,
      name,
      email,
      pw,
    };
    const { data } = await axios.post("/auth/signup", body);

    return data;
  },
};
export default AuthApi;
