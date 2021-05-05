import { connect } from 'react-redux';
import { fetchAllConnections } from '../../../actions/connection_actions';
import { fetchPet } from '../../../actions/pet_actions';
import { fetchAllConnectionRequests } from '../../../actions/connection_request_actions';
import { createConnectionRequest } from '../../../actions/connection_request_actions';
import PetList from './pet_list';


const mapStateToProps = (state) => {
  return {
    user: state.session.user,
    selectedPet: state.session.selectedPet,
    connections: state.entities.allConnections.data,
    connectionRequests: state.entities.allConnectionRequests.data
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchPet: petId => dispatch(fetchPet(petId)),
  fetchAllConnections: () => dispatch(fetchAllConnections()),
  fetchAllConnectionRequests: () => dispatch(fetchAllConnectionRequests()),
  createConnectionRequest: request => dispatch(createConnectionRequest(request))
});

export default connect(mapStateToProps, mapDispatchToProps)(PetList)