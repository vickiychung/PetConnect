import { RECEIVE_ALL_CONNECTIONS } from '../actions/connection_actions';


const allConnectionsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_CONNECTIONS:
      return action.connections
    default:
      return state;
  }
}

export default allConnectionsReducer;