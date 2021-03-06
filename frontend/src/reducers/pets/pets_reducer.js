import {
  RECEIVE_PETS,
} from '../../actions/pet_actions';

import {
  RECEIVE_USER_LOGOUT
} from '../../actions/session_actions';

const petsReducer = (state = {}, action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case RECEIVE_PETS:
      return action.pets;
    case RECEIVE_USER_LOGOUT:
      return {};
    default:
      return state;
  }
}

export default petsReducer;