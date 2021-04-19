  
import { combineReducers } from 'redux';

import petErrorsReducer from './pets/pet_errors_reducer';

const errorsReducer = combineReducers({
  petErrors: petErrorsReducer
});

export default errorsReducer;