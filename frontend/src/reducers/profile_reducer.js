import { RECEIVE_CURRENT_PET } from '../actions/pet_actions';

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
    default:
      return state;
  }
}

export default PetSessionReducer;