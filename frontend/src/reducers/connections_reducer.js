import { ACCEPT_CONNECTION_REQUEST } from '../actions/connection_request_actions';
import { RECEIVE_CONNECTIONS, REMOVE_CONNECTION } from '../actions/connection_actions'



const connectionsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    // case ACCEPT_CONNECTION_REQUEST:
    //   return nextState[connection] = action.connection
    case RECEIVE_CONNECTIONS:
      return action.connections
    case REMOVE_CONNECTION:
      // delete nextState[action.connection._id]
      // return nextState;
      nextState.data.forEach((connection, i) => {
        if (connection._id === action.connectionId) {
          nextState.data.splice(i, 1);
        }
      })
      return nextState;
    default:
      return state;
  }
}

export default connectionsReducer;