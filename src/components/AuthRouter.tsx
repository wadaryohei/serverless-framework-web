import { Auth } from 'aws-amplify';
import React, { useEffect } from 'react';
import { useHistory } from "react-router";

//------------------------------
// Type
//------------------------------
type AuthRouterProps = {
  children: React.ReactNode
}

//------------------------------
// Component
//------------------------------
const AuthRouter = (props: AuthRouterProps) => {

  //------------------------------
  // Hooks
  //------------------------------
  const history = useHistory()

  useEffect(() => {
    const f = async () => {
      const auth = await Auth.currentUserInfo()
      if (auth) {
        history.push('/')
      } else {
        history.push('/signin')
      }
    }

    f()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div>{props.children}</div>
}

export default AuthRouter
