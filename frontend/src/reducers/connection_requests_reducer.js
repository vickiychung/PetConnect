import { 
  RECEIVE_CONNECTION_REQUESTS,
  CREATE_CONNECTION_REQUEST, 
  RESPOND_TO_CONNECTION_REQUEST
} from '../actions/connection_request_actions';
import { GET_PET } from '../actions/pet_actions';

const connectionRequestsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CONNECTION_REQUESTS:
      return action.connectionRequests
    case GET_PET:
      let nextState = Object.assign({}, state)
      nextState['friendData'] = action.pet
      // return nextState.friendData.data.name = nextState.friendData.data
      // return action.pet
      return nextState;
    // case RESPOND_TO_CONNECTION_REQUEST:
    //   nextState[]
    default:
      return state;
  }
}

export default connectionRequestsReducer;