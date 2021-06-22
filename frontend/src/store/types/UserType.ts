import { AxiosError } from "axios";

export interface IUserState {
  loginErr: AxiosError | null;
  data: {
    token: string;
  };
  registerErr: AxiosError | null;
  registerRes: number | null;
  mailSendErr: AxiosError | null;
  mailLoading: boolean;
  mailRes: number | null;
  userData: {
    name: string;
    email: string;
    profileImg: string | null;
    is_admin: boolean;
    is_github: boolean;
  } | null;
  loginCheck: boolean;
  userError: AxiosError | null;
  changeInfoData: Response | null;
  changeInfoErr: AxiosError | null;
}
