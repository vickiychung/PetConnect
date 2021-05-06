import {
  RECEIVE_SENT_REQUESTS,
  CREATE_CONNECTION_REQUEST,
  ACCEPT_CONNECTION_REQUEST
} from '../actions/connection_request_actions'

import {
  RECEIVE_USER_LOGOUT
} from '../actions/session_actions';

const sentRequestsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = [...state];

  switch (action.type) {
    case RECEIVE_SENT_REQUESTS:
      return action.sentRequests.data
    case CREATE_CONNECTION_REQUEST:
      newState.push(action.connectionRequest.data)
      return newState;
    case ACCEPT_CONNECTION_REQUEST:
      newState.forEach((request, i) => {
        if (request._id === action.connection.data.id)   {
          newState.splice(i, 1);
        }
      })
      return newState;
    case RECEIVE_USER_LOGOUT:
      return [];
    default:
      return state
  }
}

export default sentRequestsReducer;