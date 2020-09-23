import { CognitoUserSession } from "amazon-cognito-identity-js";

export type authState = {
  auth?: CognitoUserSession | null
  id?: string
  email?: string
  username?: string
  isAuth?: boolean
}