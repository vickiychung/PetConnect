import { connect } from 'react-redux';
import Feed from './feed'
import { fetchPets, fetchUserPets } from '../../actions/pet_actions'


const mSTP = state => ({
  state: state,
  currentUser: state.session.user.id,
  pets: state.entities.pets.data
});

const mDTP = dispatch => ({
  fetchPets: () => dispatch(fetchPets()),
  fetchUserPets: id => dispatch(fetchUserPets(id))
});

export default connect(mSTP, mDTP)(Feed)
