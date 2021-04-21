import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, resetSessionErrors, login} from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';
import SignupForm from './signup_form';
import { session } from 'passport';

const mapStateToProps = ({ errors, session }) => {
  return {
    errors: errors.session,
    navLink: <Link to="/login">Sign In</Link>,
    user: session.user 
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: user => dispatch(signup(user)),
    login: user => dispatch(login(user)),
    resetSessionErrors: () => dispatch(resetSessionErrors()),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);