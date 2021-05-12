import { connect } from 'react-redux';
import PickPet from './pick_pet';
import { logout } from '../../../actions/session_actions';
import { fetchUserPets, registerPet, fetchPets } from '../../../actions/pet_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user.id,
    userPets: state.entities.userPets.data,
    showModal: state.ui.modal
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
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PickPet);