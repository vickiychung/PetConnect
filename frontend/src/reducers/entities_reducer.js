import { combineReducers } from "redux";

import petsReducer from './pets/pets_reducer';
import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
  pets: petsReducer,
  users: usersReducer
});

export default entitiesReducer;