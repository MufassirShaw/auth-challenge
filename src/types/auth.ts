export interface ISignup {
  email: string
  password: string
  name: string
}

export type ISignin = Omit<ISignup, "name">

export interface IToken {
  access_token: string
}
