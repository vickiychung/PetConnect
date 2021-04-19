
import { connect } from 'react-redux';

import ConnectPot from './connect_pot';

const mSTP = state => ({
  state: state
});

const mDTP = dispatch => ({

});


export default connect(mSTP, mDTP)(ConnectPot);

