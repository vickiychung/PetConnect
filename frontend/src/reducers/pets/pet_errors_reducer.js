
import {
  RECEIVE_PET,
  RECEIVE_PET_ERRORS
} from '../../actions/pet_actions';

const petErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PET:
      return [];
    case RECEIVE_PET_ERRORS:
      return action.errors  
    default:
      return state;
  }
} 

export default petErrorsReducer;