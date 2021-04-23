import {
  RECEIVE_PETS,
  RECEIVE_USER_PETS,
  RECEIVE_PET,
  REMOVE_PET
} from '../../actions/pet_actions';

const petsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_PETS:
      return action.pets;
    default:
      return state;
  }

}

export default petsReducer;