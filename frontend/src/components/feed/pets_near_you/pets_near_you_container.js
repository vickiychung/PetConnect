import { connect } from 'react-redux';
import { fetchPets, fetchUserPets } from '../../../actions/pet_actions'
import { fetchUsers } from '../../../actions/user_actions'
import PetsNearYou from './pets_near_you';


const mapStateToProps = (state) => {
  
return {
  pets: state.entities.pets.data,
  user: state.session.user
}
};

const mapDispatchToProps = (dispatch) => ({
  fetchPets: () => dispatch(fetchPets()),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchUserPets: (userId) => dispatch(fetchUserPets(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PetsNearYou)