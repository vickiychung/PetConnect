import { connect } from 'react-redux';
import { updatePet } from '../../../actions/pet_actions';
import MyPets from './my_pets';

const mapStateToProps = state => {
  return {
    currentPet: state.petProfile.pet.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updatePet: pet => dispatch(updatePet(pet))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPets);
