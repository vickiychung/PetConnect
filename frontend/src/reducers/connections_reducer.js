import { ACCEPT_CONNECTION_REQUEST } from '../actions/connection_request_actions';



const connectionsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case ACCEPT_CONNECTION_REQUEST:
      return nextState[connection] = action.connection
    default:
      return state;
  }
}

export default connectionsReducer;