import {
  RECEIVE_PETS,
  RECEIVE_USER_PETS,
  RECEIVE_PET
} from '../../actions/pet_actions';

const petsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PETS:
      return action.pets;
    case RECEIVE_USER_PETS:
      return action.pets;
    case RECEIVE_PET:
      const newPet = { [action.pet.id]: action.pet };
      return Object.assign({}, state, newPet); 
    default:
      return state;
  }

}

export default petsReducer;