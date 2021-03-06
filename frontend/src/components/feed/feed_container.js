import { connect } from 'react-redux';
import Feed from './feed';
import { fetchPet, fetchPets, fetchUserPets, fetchCurrentPet } from '../../actions/pet_actions';
import { fetchUser, fetchUsers } from '../../actions/user_actions';


const mSTP = (state, ownProps) => ({
  state: state,
  currentUser: state.session.user.id,
  currentOwner: state.session.user,
  pets: state.entities.pets.data,
  users: state.entities.users,
  currentPet: state.petProfile.pet.data,
  currentPetId: ownProps.match.params.petId,
  selectedPet: state.entities.selectedPet.data
});

const mDTP = dispatch => ({
  fetchPet: id => dispatch(fetchPet(id)),
  fetchPets: () => dispatch(fetchPets()),
  fetchUserPets: id => dispatch(fetchUserPets(id)),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchCurrentPet: petId => dispatch(fetchCurrentPet(petId))
});

export default connect(mSTP, mDTP)(Feed)
