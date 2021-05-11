import { 
  RECEIVE_CURRENT_PET,
  REMOVE_PET,
  RECEIVE_USER_PETS
} from '../actions/pet_actions';

import {
  RECEIVE_USER_LOGOUT
} from '../actions/session_actions';

const initialState = {
  pet: {}
};

const PetSessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_CURRENT_PET: 
      nextState.pet = action.pet
      return nextState;
    case REMOVE_PET:
      return initialState;
    case RECEIVE_USER_PETS:
      return initialState;
    case RECEIVE_USER_LOGOUT:
      return initialState;
    default:
      return state;
  }
}

export default PetSessionReducer;