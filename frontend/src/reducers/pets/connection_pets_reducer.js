import { GET_PET, RECEIVE_USER_PETS } from '../../actions/pet_actions';

import {
  RECEIVE_USER_LOGOUT
} from '../../actions/session_actions';

const connectionPetReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = [...state];

  switch (action.type) {
    case GET_PET:
      newState.push(action.pet)
      return newState;
    case RECEIVE_USER_PETS:
      return [];
    case RECEIVE_USER_LOGOUT:
      return [];
    default:
      return state
  }
}

export default connectionPetReducer;