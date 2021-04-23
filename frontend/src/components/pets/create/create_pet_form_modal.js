import React, { useRef } from 'react';
import CreatePetFormContainer from './create_pet_form_container';

import './create_per_form_modal.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

const CreatePetFormModal = (props) => {
  const modalRef = useRef();

  const modalContents = () => {
    return (
      <div className="create-pet-modal-background" ref={modalRef} onClick={() => props.closeModal()}>
        <div className="create-pet-modal"  onClick={e => e.stopPropagation()}>
          <div className="close-icon-container">
            <div className="close-icon" onClick={() => props.closeModal()}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
          </div>
          <CreatePetFormContainer
            showModal={props.showModal} 
          />
        </div>
      </div>
    )
  }

  const modalButton = () => {
    return (
      <li onClick={() => props.openModal()} className="pet-add-element" >
        <div className="pet-icon-add">
          <FontAwesomeIcon icon={faPlus} />
        </div>
        <div className="add-pet-but-cont">
          <span className="home-newpet-name">  
            Add Pet
          </span>
        </div>
      </li>
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

export default CreatePetFormModal;