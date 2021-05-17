import { AxiosError } from "axios";

export interface ILoginState {
  loginErr: AxiosError | null;
  data: {
    token: string;
  };
}

export interface IRegisterState {
  registerErr: AxiosError | null;
  res: number | null;
}
