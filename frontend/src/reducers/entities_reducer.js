import { combineReducers } from "redux";

import petsReducer from './pets/pets_reducer';
import usersReducer from './users_reducer';
import showPetReducer from './pets/show_pet_reducer';
import connectionRequestsReducer from './connection_requests_reducer';
import connectionsReducer from './connections_reducer';
import userPetsReducer from './pets/user_pets_reducer'
import connectionPetReducer from './pets/connection_pets_reducer';
import requestPetReducer from './pets/request_pets_reducer';
import allConnectionsReducer from './all_connections_reducer';
import allConnectionRequestsReducer from './all_connection_requests_reducer';

const entitiesReducer = combineReducers({
  pets: petsReducer,
  users: usersReducer,
  selectedPet: showPetReducer,
  connectionRequests: connectionRequestsReducer,
  connections: connectionsReducer,
  userPets: userPetsReducer,
  // friendPets: connectionPetReducer,
  // requestPets: requestPetReducer,
  allConnections: allConnectionsReducer,
  allConnectionRequests: allConnectionRequestsReducer,
});

export default entitiesReducer;