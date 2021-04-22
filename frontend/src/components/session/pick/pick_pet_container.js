import { connect } from 'react-redux';
import PickPet from './pick_pet';
import { logout } from '../../../actions/session_actions';
import { fetchUserPets, registerPet, fetchPets, fetchCurrentPet } from '../../../actions/pet_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    state: state,
    currentUser: state.session.user.id,
    userPets: state.entities.pets.data
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchUserPets: id => dispatch(fetchUserPets(id)),
    registerPet: data => dispatch(registerPet(data)),
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal()),
    fetchPets: () => dispatch(fetchPets()),
    fetchCurrentPet: petId => dispatch(fetchCurrentPet(petId))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PickPet);