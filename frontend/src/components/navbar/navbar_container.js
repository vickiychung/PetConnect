import { connect } from 'react-redux';
import Navbar from './navbar';

import { logout } from '../../actions/session_actions';

const mSTP = state => ({
  state: state,
  username: state.session.user.username
});

const mDTP = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(Navbar)