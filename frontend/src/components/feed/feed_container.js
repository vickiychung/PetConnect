import { connect } from 'react-redux';
import Feed from './feed'


const mSTP = state => ({
  state: state
});

const mDTP = dispatch => ({

});

export default connect(mSTP, mDTP)(Feed)
