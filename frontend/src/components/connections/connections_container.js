import { connect } from 'react-redux';
import Connections from './connections'

import { fetchPet, goGetPet } from '../../actions/pet_actions';
import { fetchConnections, deleteConnection } from '../../actions/connection_actions';

const mapStateToProps = state => ({
  petFriends: state.entities.friendPets,
  connections: state.entities.connections
});

const mapDispatchToProps = dispatch => ({
  goGetPet: id => dispatch(goGetPet(id)),
  fetchPet: petId => dispatch(fetchPet(petId)),
  fetchConnections: currentPetId => dispatch(fetchConnections(currentPetId)),
  deleteConnection: connectionId => dispatch(deleteConnection(connectionId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Connections);
