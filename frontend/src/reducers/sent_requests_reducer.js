import { RECEIVE_SENT_REQUESTS } from '../actions/connection_request_actions'

import {
  RECEIVE_USER_LOGOUT
} from '../actions/session_actions';

const sentRequestsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = [...state];

  switch (action.type) {
    case RECEIVE_SENT_REQUESTS:
      return action.sentRequests.data
    case RECEIVE_USER_LOGOUT:
      return [];
    default:
      return state
  }
}

export default sentRequestsReducer;