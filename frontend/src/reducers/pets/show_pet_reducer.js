import {
  RECEIVE_SELECTED_PET
} from '../../actions/pet_actions';

const showPetReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SELECTED_PET:
      return action.pet
    default:
      return state;
  }

}

export default showPetReducer;