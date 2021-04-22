import { combineReducers } from "redux";

import petsReducer from './pets/pets_reducer';
import usersReducer from './users_reducer';
import showPetReducer from './pets/show_pet_reducer';

const entitiesReducer = combineReducers({
  pets: petsReducer,
  users: usersReducer,
  selectedPet: showPetReducer
});

export default entitiesReducer;