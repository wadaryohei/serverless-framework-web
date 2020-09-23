import React, { useEffect } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Home from '../Home/Home';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import SignUpCompolete from '../SignUp/SignUpCompolete';
import SignUpConfirm from '../SignUp/SignUpConfirm';
import AuthRouter from '../../components/AuthRouter';
import { useAuth } from '../../hooks/useAuth';
import * as PAGE from '../../constants/index';

//------------------------------
// Component
//------------------------------
const App = () =>{

  const auth = useAuth()
  useEffect(() => {
    auth.initUser()
    // eslint-disable-next-line
  }, [])

  return (
    <Router>
      <Switch>
      <Route exact path={PAGE.PAGE_SIGNUP} component={SignUp} />
      <Route path={PAGE.PAGE_SIGNUP_CONFIRM} component={SignUpConfirm} />
      <Route exact path={PAGE.PAGE_SIGNUP_COMPLETE} component={SignUpCompolete} />
      <Route exact path={PAGE.PAGE_SIGNIN} component={SignIn} />

      <AuthRouter>
        <Route exact path={PAGE.PAGE_HOME} component={Home} />
      </AuthRouter>

      { /* Not Found */ }
      <Route component={() => <Redirect to={PAGE.PAGE_HOME} />}></Route>
      </Switch>
    </Router>
  );
}

export default App;
