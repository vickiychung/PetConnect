import { connect } from 'react-redux';
import { registerPet } from '../../../actions/pet_actions';
import CreatePetForm from './create_pet_form';


const mSTP = state => ({
  currentUser: state.session.user.id,
  petErrors: state.errors.petErrors
});

const mDTP = dispatch => ({
  registerPet: data => dispatch(registerPet(data))
});

export default connect(mSTP, mDTP)(CreatePetForm);