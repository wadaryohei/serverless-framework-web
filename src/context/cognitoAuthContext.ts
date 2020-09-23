import { createContext } from 'react';
import { CognitoUser } from "amazon-cognito-identity-js";

export const cognitoAuthContext = createContext<CognitoUser | null>(null)