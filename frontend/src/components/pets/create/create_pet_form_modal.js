import React, {useState, useRef, useEffect, useCallback} from 'react';
import CreatePetFormContainer from './create_pet_form_container';

import './create_per_form_modal.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

const CreatePetFormModal = (props) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  const modalRef = useRef();

  const modalContents = () => {
    return (
      <div className="create-pet-modal-background" ref={modalRef} onClick={closeModal}>
        <div className="create-pet-modal">
          <div className="close-icon-container">
            <div className="close-icon" onClick={openModal}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
          </div>
          <CreatePetFormContainer showModal={showModal} setShowModal={setShowModal}/>
        </div>
      </div>
    )
  }

  const modalButton = () => {
    return (
      <li onClick={openModal} className="pet-list-element" >
        <div className="pet-individual" >
          <div className="pet-icon-add">
            <FontAwesomeIcon icon={faPlus} />
          </div>
          <div className="home-newpet-name">  
            New Pet
          </div>
        </div>
      </li>
    )
  }

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    };
  };

  const keyPress = useCallback(e => {
    if (e.key === 'Escape' && showModal ) {
      setShowModal(false);
    }
  }, [setShowModal, showModal]);

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress)
  }, [keyPress])

  if (showModal) {
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