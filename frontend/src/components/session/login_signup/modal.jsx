import React from 'react';
import { closeModal } from '../../../actions/modal_actions';
import { connect } from 'react-redux';
import SignupForm from './signup_form_container'
import { resetSessionErrors } from '../../../actions/session_actions';


function Modal({modal, closeModal, resetSessionErrors}) {
  if (!modal) {
    return null;
  }
  let component;
  const closeAndClear = () =>{
    resetSessionErrors();
    closeModal();
  }
  switch (modal) {
    case 'signup':
      component = <SignupForm />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeAndClear}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal,
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    resetSessionErrors: () => dispatch(resetSessionErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);