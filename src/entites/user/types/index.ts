import { IdBDType } from 'app/store/types'

export type TokenType = {
  token: string
}

export type UserType = IdBDType & {
  email: string
  username: string
}

export type UserLoginType = {
  email: string
  password: string
}

export type UserRegistrationType = UserLoginType & {
  passwordConfirmation: string
  username: string
}
