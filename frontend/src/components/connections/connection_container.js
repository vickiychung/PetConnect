import { connect } from 'react-redux';
import Connections from './connections'

import { fetchPet } from '../../actions/pet_actions';

const mapStateToProps = state => ({
  petFriend: state.entities.friendPets
  // state
});

const mapDispatchToProps = dispatch => ({
  fetchPet: petId => dispatch(fetchPet(petId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Connections);
