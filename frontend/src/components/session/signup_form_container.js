import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, resetSessionErrors, login } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    navLink: <Link to="/login">Sign In</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: user => dispatch(signup(user)),
    resetSessionErrors: () => dispatch(resetSessionErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);