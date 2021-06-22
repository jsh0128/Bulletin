export type LoginPayload = {
  email: string;
  pw: string;
};

export type RegisterPayload = {
  email: string;
  password: string;
  name: string;
  profileImg?: string;
  authCode: number;
};

export type CertMailPayload = {
  email: string;
};

export type ChangeInfoPayload = {
  name: string;
  password?: string;
  profile_img?: string;
};

export type GithubLoginPayload = {
  code: string;
};
