import { GET_PET } from '../../actions/pet_actions';

const connectionPetReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = [...state];
  // let nextState = Object.assign({}, state)

  switch (action.type) {
    case GET_PET:
      // return newState.push(action.pet)
      // return nextState[]
      newState.push(action.pet)
      return newState;
    default:
      return state
  }
}

export default connectionPetReducer;