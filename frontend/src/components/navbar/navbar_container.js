import { connect } from 'react-redux';
import Navbar from './navbar';

import { logout } from '../../actions/session_actions';
import { deletePet, fetchCurrentPet } from '../../actions/pet_actions';

const mSTP = (state, ownProps) => ({
  state: state,
  ownProps,
  username: state.session.user.username
});

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  deletePet: petId => dispatch(deletePet(petId)),
  fetchCurrentPet: petId => dispatch(fetchCurrentPet(petId))
});

export default connect(mSTP, mDTP)(Navbar)