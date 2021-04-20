import { connect } from 'react-redux';
import PickPet from './pick_pet';
import { logout } from '../../../actions/session_actions';
import { fetchUserPets, registerPet } from '../../../actions/pet_actions';

const mapStateToProps = (state) => {
  return {
    state: state,
    currentUser: state.session.user.id,
    pets: state.entities.pets.data
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchUserPets: id => dispatch(fetchUserPets(id)),
    registerPet: data => dispatch(registerPet(data))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PickPet);