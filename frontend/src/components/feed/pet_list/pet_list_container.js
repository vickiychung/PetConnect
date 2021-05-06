import { connect } from 'react-redux';
import { fetchPet } from '../../../actions/pet_actions';
import { 
  createConnectionRequest 
} from '../../../actions/connection_request_actions';
import PetList from './pet_list';


const mapStateToProps = (state) => {
  return {
    user: state.session.user,
    selectedPet: state.session.selectedPet,
    connections: state.entities.connections,
    connectionRequests: state.entities.connectionRequests,
    sentRequests: state.entities.sentRequests
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchPet: petId => dispatch(fetchPet(petId)),
  createConnectionRequest: request => dispatch(createConnectionRequest(request))
});

export default connect(mapStateToProps, mapDispatchToProps)(PetList)