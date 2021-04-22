import { RECEIVE_USERS, RECEIVE_USER } from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_USERS:
      return action.users.data
    case RECEIVE_USER:
      return action.user.data
    default:
      return state;
  }
}

export default usersReducer;