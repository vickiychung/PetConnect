import { RECEIVE_SHELTERS, RECEIVE_SHELTER } from '../../actions/shelter_actions';


const sheltersReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_SHELTERS:
      return action.shelters;
    case RECEIVE_SHELTER:
      let shelterLength = nextState.data.length;
      nextState.data[shelterLength] = action.shelter.data;
      return nextState;
    default:
      return state;
  }
}

export default sheltersReducer;