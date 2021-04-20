import { connect } from 'react-redux';
import Navbar from './navbar';

import { logout } from '../../actions/session_actions';

const mSTP = state => ({
  state: state
});

const mDTP = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(Navbar)