import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import Modal from './session/modal';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

const App = () => (
  <div>
    <Modal />
    <p>Hello pets</p>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      {/* <Redirect to="/"/> */}
    </Switch>
  </div>
);

export default App;