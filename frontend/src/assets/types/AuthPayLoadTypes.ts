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

export type certMailPayload = {
  email: string;
};
