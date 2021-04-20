import React from 'react';
import { Switch } from 'react-router-dom';
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
      <ProtectedRoute exact path="/feed" component={FeedContainer} />
      <ProtectedRoute exact path="/pick_pet" component={PickPetContainer} />
      
    </Switch>
  </div>
);

export default App;