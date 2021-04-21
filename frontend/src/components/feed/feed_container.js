import { connect } from 'react-redux';
import Feed from './feed'
import { fetchPets } from '../../actions/pet_actions'


const mSTP = state => ({
  state: state,
  pets: state.entities.pets.data
});

const mDTP = dispatch => ({
  fetchPets: () => dispatch(fetchPets())
});

export default connect(mSTP, mDTP)(Feed)
