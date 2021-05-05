import { connect } from 'react-redux';
import Connections from './connections'

import { fetchPet, goGetPet } from '../../actions/pet_actions';
import { fetchConnections, deleteConnection } from '../../actions/connection_actions';

const mapStateToProps = state => ({
  connections: state.entities.connections,
  updateId: state.petProfile.pet.data._id
});

const mapDispatchToProps = dispatch => ({
  goGetPet: id => dispatch(goGetPet(id)),
  fetchPet: petId => dispatch(fetchPet(petId)),
  fetchConnections: currentPetId => dispatch(fetchConnections(currentPetId)),
  deleteConnection: connectionId => dispatch(deleteConnection(connectionId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Connections);
