import { 
  RECEIVE_CONNECTION_REQUESTS,
  ACCEPT_CONNECTION_REQUEST
} from '../actions/connection_request_actions';
import { RECEIVE_USER_PETS } from '../actions/pet_actions';

import {
  RECEIVE_USER_LOGOUT
} from '../actions/session_actions';

const connectionRequestsReducer = (state = [], action) => {
  Object.freeze(state);
  let nextState = [...state];

  switch (action.type) {
    case RECEIVE_CONNECTION_REQUESTS:
      return action.connectionRequests.data
    case ACCEPT_CONNECTION_REQUEST:
      nextState.forEach((request, i) => {
        if (request._id === action.connection.data.id)   {
          nextState.splice(i, 1);
        }
      })
      return nextState;
    case RECEIVE_USER_PETS:
      return [];
    case RECEIVE_USER_LOGOUT:
      return [];
    default:  
      return state;
  }
}

export default connectionRequestsReducer;