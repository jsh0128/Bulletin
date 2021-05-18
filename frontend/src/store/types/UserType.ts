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

export interface IAuthEmail {
  mailSendErr: AxiosError | null;
  mailRes: number | null;
}

export interface IUserInfo {
  userData: {
    name: string;
    email: string;
    profileImg: string | null;
  } | null;
  loginCheck: boolean;
  userError: AxiosError | null;
}
