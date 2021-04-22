import React, { useRef } from 'react';
import SignupForm from './signup_form_container';

const CreateUserModal = props => {
  const modalRef = useRef();

  const modalContents = () => {
    return (
      <div className="modal-background" ref={modalRef} onClick={() => props.closeModal()}>
        <div className="modal-child"  onClick={e => e.stopPropagation()}>
          <SignupForm
            showModal={props.showModal}
            closeModal={props.closeModal}
          />
        </div>
      </div>
    )
  }

  const modalButton = () => {
    return (
      <div className='login-signup-button-container' onClick={() => props.openModal()}>
        <button >Create New Account</button>
      </div>
    )
  }

  if (props.showModal) {
    return (
      <div>
        {modalButton()}
        {modalContents()}
      </div>
    )
  } else {
    return (
      modalButton()
    )
  }

}

export default CreateUserModal;