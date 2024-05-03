export type User = {
  id?: string,
  email: string,
  firstName: string,
  lastName: string,
  password: string,
};

export type UserLoginRequest = {
  email: string,
  password: string,
};

export type UserSignUpRequest = {
  email: string,
  firstName: string,
  lastName: string,
  password: string,
};


export type UserDataResponse = {
  id: string,
  email: string,
  firstName: string,
  lastName: string,
  token: string,
};

export type UserApiResponse = {
  data: UserDataResponse;
  message: string;
  status: string;
}