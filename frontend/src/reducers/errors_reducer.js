import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
import petErrorsReducer from './pets/pet_errors_reducer';

export default combineReducers({
  session: SessionErrorsReducer,
  petErrors: petErrorsReducer
});

