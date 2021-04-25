import {
  RECEIVE_SELECTED_PET,
  RECEIVE_CURRENT_PET,
  RECEIVE_USER_PETS
} from '../../actions/pet_actions';

const showPetReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SELECTED_PET:
      return action.pet
    case RECEIVE_CURRENT_PET:
      return {};
    case RECEIVE_USER_PETS:
      return {};
    default:
      return state;
  }
}

export default showPetReducer;