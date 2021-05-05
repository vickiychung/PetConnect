import { connect } from 'react-redux';
import { fetchAllConnections } from '../../../actions/connection_actions';
import { fetchPet, fetchPets} from '../../../actions/pet_actions';
import { fetchUsers } from '../../../actions/user_actions';
import {fetchAllConnectionRequests} from '../../../actions/connection_request_actions'
import PetsNearYou from './pets_near_you';


const mapStateToProps = (state) => {
  return {
    pets: state.entities.pets.data,
    user: state.session.user,
    selectedPet: state.session.selectedPet,
    connections: state.entities.allConnections.data,
    connectionRequests: state.entities.allConnectionRequests.data
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchPets: () => dispatch(fetchPets()),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchPet: petId => dispatch(fetchPet(petId)),
  fetchAllConnections: () => dispatch(fetchAllConnections()),
  fetchAllConnectionRequests: () => dispatch(fetchAllConnectionRequests())
});

export default connect(mapStateToProps, mapDispatchToProps)(PetsNearYou)