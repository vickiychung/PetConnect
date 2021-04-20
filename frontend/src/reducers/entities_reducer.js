import { combineReducers } from "redux";

import petsReducer from './pets/pets_reducer';

const entitiesReducer = combineReducers({
  pets: petsReducer
});

export default entitiesReducer;