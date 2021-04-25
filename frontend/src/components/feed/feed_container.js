import { connect } from 'react-redux';
import Feed from './feed';
import { fetchPet, fetchPets, fetchUserPets, fetchCurrentPet } from '../../actions/pet_actions';
import { fetchUser, fetchUsers } from '../../actions/user_actions';
import { createConnectionRequest } from '../../actions/connection_request_actions';


const mSTP = (state, ownProps) => ({
  state: state,
  currentUser: state.session.user.id,
  currentOwner: state.session.user,
  pets: state.entities.pets.data,
  users: state.entities.users,
  currentPet: state.petProfile.pet.data,
  currentPetId: ownProps.match.params.petId,
  selectedPet: state.entities.selectedPet.data,
  // connectionRequests: state.entities.connectionRequests.data,
  // connections: state.entities.connections.data
});

const mDTP = dispatch => ({
  fetchPet: id => dispatch(fetchPet(id)),
  // goGetPet: id => dispatch(goGetPet(id)),
  fetchPets: () => dispatch(fetchPets()),
  fetchUserPets: id => dispatch(fetchUserPets(id)),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  fetchUsers: () => dispatch(fetchUsers()),
  // fetchConnectionRequests: friendId => dispatch(fetchConnectionRequests(friendId)),
  // acceptConnectionRequest: data => dispatch(acceptConnectionRequest(data)),
  createConnectionRequest: request => dispatch(createConnectionRequest(request)),
  // fetchConnections: currentPetId => dispatch(fetchConnections(currentPetId)),
  // deleteConnection: connectionId => dispatch(deleteConnection(connectionId)),
  fetchCurrentPet: petId => dispatch(fetchCurrentPet(petId))
});

export default connect(mSTP, mDTP)(Feed)
