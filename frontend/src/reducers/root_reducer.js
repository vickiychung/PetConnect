import { combineReducers } from 'redux';

import entitiesReducer from './entities_reducer';
import errorsReducer from './errors_reducer';

const RootReducer = combineReducers({
  entities: entitiesReducer,
  errors: errorsReducer
});

export default RootReducer;