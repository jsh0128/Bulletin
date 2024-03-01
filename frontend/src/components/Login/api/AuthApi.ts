import customAxios from "common/lib/axios";
import { IResponse } from "common/types";

class AuthApi {
  getToken = async (code: string) => {
    const { data }: IResponse<{ data: string }> = await customAxios.post(
      "/auth/githubAuth",
      { code }
    );

    return data;
  };
}

export default new AuthApi();
