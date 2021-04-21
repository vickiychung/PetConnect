import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

const modalReducer = (state = false, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return action.showModal;
    case CLOSE_MODAL:
      return action.showModal;
    default:
      return state;
  }
}

export default modalReducer;