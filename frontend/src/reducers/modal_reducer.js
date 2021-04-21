import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

import {RECEIVE_PET} from '../actions/pet_actions'
import { RECEIVE_CURRENT_USER, RECEIVE_USER_SIGN_IN } from '../actions/session_actions';


const modalReducer = (state = false, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return true;
    case CLOSE_MODAL:
      return false;
    case RECEIVE_PET:
      return false;
    case RECEIVE_CURRENT_USER:
      return false;
    // case RECEIVE_USER_SIGN_IN:
    //   return false;
    default:
      return state;
  }
}

export default modalReducer;