import { connect } from 'react-redux';
import { login, resetSessionErrors } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import PickPet from './pick_pet';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PickPet);