import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';

import {fetchPets, fetchUserPets, fetchPet, registerPet} from './util/pet_api_util';

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (localStorage.jwtToken) {

    // setAuthToken(localStorage.jwtToken);

    const decodedUser = jwt_decode(localStorage.jwtToken);

    // const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };
    const preloadedState = {};
    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

      if (decodedUser.exp < currentTime) {
        // store.dispatch(logout());
      // window.location.href = '/login';
    }
  } else {
    store = configureStore({});
  }


  window.store = store;

  window.fetchPets = fetchPets;
  window.fetchUserPets = fetchUserPets;
  window.fetchPet = fetchPet;
  window.registerPet = registerPet;


  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store} />, root);
});