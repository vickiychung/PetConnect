
import {
  RECEIVE_PET,
  RECEIVE_PET_ERRORS
} from '../../actions/pet_actions';

import { CLOSE_MODAL } from '../../actions/modal_actions';

const petErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PET:
      return [];
    case CLOSE_MODAL:
      return [];
    case RECEIVE_PET_ERRORS:
      return action.errors  
    default:
      return state;
  }
} 

export default petErrorsReducer;