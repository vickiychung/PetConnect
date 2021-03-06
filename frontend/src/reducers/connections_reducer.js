import { RECEIVE_CONNECTIONS, REMOVE_CONNECTION } from '../actions/connection_actions'

import { RECEIVE_USER_PETS } from '../actions/pet_actions';

import {
  RECEIVE_USER_LOGOUT
} from '../actions/session_actions';

const connectionsReducer = (state = [], action) => {
  Object.freeze(state);
  let nextState = [...state];
  
  switch (action.type) {
    case RECEIVE_CONNECTIONS:
      return action.connections.data
    case REMOVE_CONNECTION:
      nextState.forEach((connection, i) => {
        if (connection._id === action.connection.data._id) {
          nextState.splice(i, 1);
        }
      });
      return nextState;
    case RECEIVE_USER_PETS:
      return [];
    case RECEIVE_USER_LOGOUT:
      return [];
    default:
      return state;
  }
}

export default connectionsReducer;