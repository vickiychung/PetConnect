import { connect } from 'react-redux';
import Feed from './feed'
import { goGetPet, fetchPet, fetchPets, fetchUserPets } from '../../actions/pet_actions'
import { fetchUser, fetchUsers } from '../../actions/user_actions'
import {
  fetchConnectionRequests,
  createConnectionRequest,
  acceptConnectionRequest
} from '../../actions/connection_request_actions';


const mSTP = (state, ownProps) => ({
  state: state,
  currentUser: state.session.user.id,
  currentOwner: state.session.user,
  pets: state.entities.pets.data,
  petts: state.entities.pets,
  users: state.entities.users,
  currentPet: state.petProfile.pet.data,
  currentPetId: ownProps.match.params.petId,
  selectedPet: state.entities.selectedPet.data,
  connectionRequests: state.entities.connectionRequests.data
});

const mDTP = dispatch => ({
  fetchPet: id => dispatch(fetchPet(id)),
  goGetPet: id => dispatch(goGetPet(id)),
  fetchPets: () => dispatch(fetchPets()),
  fetchUserPets: id => dispatch(fetchUserPets(id)),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchConnectionRequests: friendId => dispatch(fetchConnectionRequests(friendId)),
  createConnectionRequest: request => dispatch(createConnectionRequest(request)),
  acceptConnectionRequest: data => dispatch(acceptConnectionRequest(data))
});

export default connect(mSTP, mDTP)(Feed)
