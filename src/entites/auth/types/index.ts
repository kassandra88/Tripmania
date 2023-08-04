export type UserLoginType = {
  email: string
  password: string
}

export type UserRegistrationType = UserLoginType & {
  passwordConfirmation: string
  username: string
}
