import { connect } from 'react-redux';
import { fetchAllConnections } from '../../../actions/connection_actions';
import { fetchPet, fetchPets, fetchUserPets } from '../../../actions/pet_actions'
import { fetchUsers } from '../../../actions/user_actions'
import PetsNearYou from './pets_near_you';


const mapStateToProps = (state) => {
  return {
    pets: state.entities.pets.data,
    user: state.session.user,
    selectedPet: state.session.selectedPet,
    connections: state.entities.allConnections.data
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchPets: () => dispatch(fetchPets()),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchUserPets: (userId) => dispatch(fetchUserPets(userId)),
  fetchPet: petId => dispatch(fetchPet(petId)),
  fetchAllConnections: () => dispatch(fetchAllConnections())
});

export default connect(mapStateToProps, mapDispatchToProps)(PetsNearYou)