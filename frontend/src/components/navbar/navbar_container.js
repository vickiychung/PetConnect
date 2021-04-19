import { connect } from 'react-redux';

import Navbar from './navbar';

const mSTP = state => ({
  state: state
});

const mDTP = dispatch => ({

});

export default connect(mSTP, mDTP)(Navbar)