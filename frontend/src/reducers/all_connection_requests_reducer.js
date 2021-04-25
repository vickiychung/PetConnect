import { RECEIVE_ALL_CONNECTION_REQUESTS } from '../actions/connection_request_actions';


const allConnectionRequestsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_CONNECTION_REQUESTS:
      return action.connectionRequests
    default:
      return state;
  }
}

export default allConnectionRequestsReducer;