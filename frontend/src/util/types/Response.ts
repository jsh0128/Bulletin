export type Response = {
  status: number;
  message: string;
};

export interface ILoginResponse extends Response {
  data: {
    token: string;
  };
}

export interface IGetInfoResponse extends Response {
  data: {
    email: string;
    name: string;
    profile_Img: string | null;
    is_github: boolean;
    is_admin: boolean;
  };
}
