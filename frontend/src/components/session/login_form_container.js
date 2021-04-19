import { connect } from 'react-redux';
import { login, resetSessionErrors } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import LoginForm from './login_form';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    navLink: <Link to="/signup">Create New Account</Link>,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: user => dispatch(login(user)),
    demoUser: (user) => dispatch(login(user)),
    resetSessionErrors: () => dispatch(resetSessionErrors()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);