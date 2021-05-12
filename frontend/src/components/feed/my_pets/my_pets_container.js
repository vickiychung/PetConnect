import { connect } from 'react-redux';
import { updatePet, fetchCurrentPet } from '../../../actions/pet_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';
import MyPets from './my_pets';

const mapStateToProps = state => {
  return {
    currentPet: state.petProfile.pet.data,
    showModal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updatePet: pet => dispatch(updatePet(pet)),
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal()),
    fetchCurrentPet: petId => dispatch(fetchCurrentPet(petId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPets);
