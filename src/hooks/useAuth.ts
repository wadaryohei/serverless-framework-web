import { useCallback } from 'react';
import { Auth } from 'aws-amplify';
import { CognitoUserSession } from "amazon-cognito-identity-js";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router";
import { AuthActions } from '../stores/auth/actions';
import { useSelector } from './useSelector';
import { initialState } from '../stores/auth/reducers';
import * as PAGE from '../constants/index';

//------------------------------
// Type
//------------------------------
export type useAuthType = {
  initUser: () => Promise<void>
  signIn: (username: string, password: string) => Promise<void>
  signUp: (username: string, password: string, email: string) => Promise<void>
  signOut: () => void
  resendSignUp: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => Promise<void>
}

//------------------------------
// Hooks
//------------------------------
export const useAuth = (): useAuthType => {
  const dispatch = useDispatch()
  const selector = useSelector()
  const history = useHistory()

  /**
   * ユーザー初期化処理
   */
  const initUser = useCallback(async (): Promise<void> => {
    const auth: CognitoUserSession | null = await Auth.currentSession()
    const { username } = auth.getAccessToken().payload
    const { email } = auth.getIdToken().payload

    if (auth) {
      dispatch(AuthActions.authenticated({
        auth: auth,
        username: username,
        email: email,
        isAuth: true
      }))
    }
  }, [dispatch])

  /**
   * サインイン処理
   */
  const signIn = async (_username: string, _password: string): Promise<void> => {
    try {
      await Auth.signIn(_username, _password).then(() => {
        initUser()
        history.push(PAGE.PAGE_HOME)
      })
    } catch (e) {
      alert('ログインに失敗しました')
      window.location.reload()
      return
    }
  }

  /**
   * サインアップ処理
   */
  const signUp = async (_username: string, _password: string, _email: string): Promise<void> => {
    try {
      const newUser = await Auth.signUp({
        username: _username,
        password: _password,
        attributes: {
          email: _email
        }
      })

      if (newUser) {
        history.push(PAGE.PAGE_SIGNUP_COMPLETE)
      }
    } catch (e) {
      alert('ユーザーの作成に失敗しました')
      console.log(e)
      return
    }
  }

  /**
   * 再度認証メールを送る処理
   */
  const resendSignUp = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): Promise<void> => {
    e.preventDefault()

    const username = selector.userState().username
    if (username) {
      await Auth.resendSignUp(username)
      alert('メールアドレスに確認コードを再送信しました')
      history.push(PAGE.PAGE_HOME)
    }
  }

  /**
   * サインアウト処理
   */
  const signOut = (): void => {
    Auth.signOut()
    history.push(PAGE.PAGE_SIGNIN)
    dispatch(AuthActions.authenticated(initialState))
  }

  return { initUser, signIn, signUp, signOut, resendSignUp }
}
