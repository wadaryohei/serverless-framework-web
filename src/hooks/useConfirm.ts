import { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
import { useHistory, useLocation } from "react-router";
import * as PAGE from '../constants/index';

//------------------------------
// Type
//------------------------------
export type useConfirmType = {
  isConfirmParams: () => boolean
  getConfirmParams: () => confirmParams
  confirm: (email: string, code: string) => Promise<void>
  resendConfirm: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => Promise<void>
  username: string
  code: string
}

export type confirmParams = {
  username: string | null
  code: string | null
}

//------------------------------
// Hooks
//------------------------------
export const useConfirm = (): useConfirmType => {
  const history = useHistory()
  const location = useLocation()
  const [username, setUsername] = useState<string>('')
  const [code, setCode] = useState<string>('')

  //------------------------------
  // LifeCycle
  //------------------------------
  useEffect(() => {
    // 確認メールのURLから飛んできたかを確認する
    const params = new URLSearchParams(location.search)
    const username = params.get('username')
    const code = params.get('code')
    if (username) {
      setUsername(username)
    } else {
      history.push(PAGE.PAGE_HOME)
      window.scrollTo(0, 0)
    }
    if (code) {
      setCode(code)
    }
  }, [history, location.search])


  /**
   * 確認メールのURLから取得したParamsを返す
   */
  const getConfirmParams = (): confirmParams => {
    return {
      username: username,
      code: code
    }
  }

  /**
   * URLのクエリパラメータが存在するかどうか
   */
  const isConfirmParams = (): boolean => {
    return username ? true : false
  }

  /**
   * コンファーム処理
   */
  const confirm = async (inputEmail: string, inputCode: string): Promise<void> => {
    try {
      const confirmUser = await Auth.confirmSignUp(inputEmail, inputCode)
      if (confirmUser) {
        history.push(PAGE.PAGE_HOME)
      }
    } catch (e) {
      console.log(e)
    }
  }

  /**
   * 再度認証メールを送る処理
   */
  const resendConfirm = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): Promise<void> => {
    e.preventDefault()
    if (username) {
      await Auth.resendSignUp(username)
      alert('メールアドレスに確認コードを再送信しました')
      history.push(PAGE.PAGE_SIGNIN)
    }
  }

  return { isConfirmParams, getConfirmParams, confirm, resendConfirm, username, code }
}
