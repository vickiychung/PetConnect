
import { connect } from 'react-redux';
import ConnectPot from './connect_pot';

import { fetchPets } from '../../actions/pet_actions';

const mSTP = state => ({
  pets: state.entities.pets.data
});

const mDTP = dispatch => ({
  fetchPets: () => dispatch(fetchPets())
});


export default connect(mSTP, mDTP)(ConnectPot);

