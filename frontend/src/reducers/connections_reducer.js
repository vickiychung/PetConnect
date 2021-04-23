import { ACCEPT_CONNECTION_REQUEST } from '../actions/connection_request_actions';
import { RECEIVE_CONNECTIONS, REMOVE_CONNECTION } from '../actions/connection_actions'

import { RECEIVE_USER_PETS } from '../actions/pet_actions';

import {
  RECEIVE_USER_LOGOUT
} from '../actions/session_actions';

const connectionsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CONNECTIONS:
      return action.connections
    case REMOVE_CONNECTION:
      nextState.data.forEach((connection, i) => {
        if (connection._id === action.connectionId) {
          nextState.data.splice(i, 1);
        }
      })
      return nextState;
    case RECEIVE_USER_PETS:
      return {};
    case RECEIVE_USER_LOGOUT:
      return {};
    default:
      return state;
  }
}

export default connectionsReducer;