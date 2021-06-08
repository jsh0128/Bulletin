import { AxiosError } from "axios";

export interface ILoginState {
  loginErr: AxiosError | null;
  data: {
    token: string;
  };
}

export interface IRegisterState {
  registerErr: AxiosError | null;
  registerRes: number | null;
}

export interface IAuthEmailState {
  mailSendErr: AxiosError | null;
  mailRes: number | null;
}

export interface IUserInfoState {
  userData: {
    name: string;
    email: string;
    profileImg: string | null;
    is_admin: boolean;
  } | null;
  loginCheck: boolean;
  userError: AxiosError | null;
}
