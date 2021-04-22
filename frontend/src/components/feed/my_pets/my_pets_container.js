import { connect } from 'react-redux';
// import { fetchCurrentPet } from '../../../actions/pet_actions';
import MyPets from './my_pets';

const mapStateToProps = state => {
  return {
    currentPet: state.petProfile.data
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchCurrentPet: petId => dispatch(fetchCurrentPet(petId))
//   };
// };

export default connect(mapStateToProps, null)(MyPets);
