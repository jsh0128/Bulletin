import { AxiosResponse } from "axios";

export interface ILoginState {
  error: AxiosResponse<Response> | null;
  data: {
    token: string;
  };
}

export interface IRegisterState {
  error: AxiosResponse<Response> | null;
  res: number | null;
}
