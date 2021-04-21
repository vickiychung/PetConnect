import { connect } from 'react-redux';
import { fetchPets } from '../../../actions/pet_actions'
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
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(PetsNearYou)