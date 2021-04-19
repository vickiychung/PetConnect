import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import FeedContainer from './feed/feed_container';

const App = () => (
  <div>
    
    <Switch>
      <Route exact path="/feed" component={FeedContainer} />
      
    </Switch>
  </div>
);

export default App;