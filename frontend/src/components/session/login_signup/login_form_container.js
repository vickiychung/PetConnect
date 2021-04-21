import { connect } from 'react-redux';
import { login, resetSessionErrors } from '../../../actions/session_actions';
import LoginForm from './login_form';
import { openModal } from '../../../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    ui: state.ui
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: user => dispatch(login(user)),
    demoUser: (user) => dispatch(login(user)),
    resetSessionErrors: () => dispatch(resetSessionErrors()),
    openModal: modal => dispatch(openModal(modal))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);