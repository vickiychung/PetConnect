import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import FeedContainer from './feed/feed_container';

import Modal from './session/modal';
import LoginFormContainer from './session/login_form_container';
import PickPetContainer from './session/pick/pick_pet_container'

const App = () => (
  <div>
    <Modal />
    {/* <p>Hello pets</p> */}
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <ProtectedRoute exact path="/pick_pet" component={PickPetContainer} />
      <ProtectedRoute exact path="/feed" component={FeedContainer} />
    
      <Redirect exact from="/*" to="/login" />
      <Redirect exact from="/login/*" to="/login" />
      <Redirect exact from="/feed/*" to="/feed" />
      <Redirect exact from="/pick_pet/*" to="/pick_pet" />

    </Switch>
  </div>
);

export default App;