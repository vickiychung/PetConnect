import { connect } from 'react-redux';
import Feed from './feed'
import { fetchPets, fetchUserPets } from '../../actions/pet_actions'
import { fetchUser, fetchUsers } from '../../actions/user_actions'


const mSTP = (state, ownProps) => ({
  state: state,
  currentUser: state.session.user.id,
  currentOwner: state.session.user,
  pets: state.entities.pets.data,
  users: state.entities.users,
  currentPet: state.petProfile.pet.data,
  currentPetId: ownProps.match.params.petId
});

const mDTP = dispatch => ({
  fetchPets: () => dispatch(fetchPets()),
  fetchUserPets: id => dispatch(fetchUserPets(id)),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mSTP, mDTP)(Feed)
