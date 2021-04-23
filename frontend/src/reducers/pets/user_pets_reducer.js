import {
  RECEIVE_PET,
  REMOVE_PET,
  RECEIVE_USER_PETS,
  EDIT_PET
} from '../../actions/pet_actions';

import {
  RECEIVE_USER_LOGOUT
} from '../../actions/session_actions';

const userPetsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_USER_PETS:
      return action.userPets;
    case RECEIVE_PET:
      let petLength = newState.data.length || 1;
      newState.data[petLength] = action.pet.data;
      return newState; 
    case REMOVE_PET:
      newState.data.forEach((pet, i) => {
        if (pet._id === action.petId) {
          newState.data.splice(i, 1);
        };
      });
      return newState;
    // case EDIT_PET:
    //   newState.data.forEach((pet, i) => {
    //     if (pet._id === action.pet._id) {
    //       newState.data[i] = action.pet;
    //     };
    //   });
    //   return newState;
    case RECEIVE_USER_LOGOUT:
      return {};
    default:
      return state;
  }

}

export default userPetsReducer;