import { connect } from 'react-redux';
import { fetchPet, fetchPets, fetchUserPets } from '../../../actions/pet_actions'
import { fetchUsers } from '../../../actions/user_actions'
import PetsNearYou from './pets_near_you';


const mapStateToProps = (state) => {
  
return {
  pets: state.entities.pets.data,
  user: state.session.user,
  selectedPet: state.session.selectedPet
}
};

const mapDispatchToProps = (dispatch) => ({
  fetchPets: () => dispatch(fetchPets()),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchUserPets: (userId) => dispatch(fetchUserPets(userId)),
  fetchPet: petId => dispatch(fetchPet(petId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PetsNearYou)