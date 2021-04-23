import React from 'react';
import './my_pets.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

class MyPets extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.currentPet.name,
      species: this.props.currentPet.species,
      breed: this.props.currentPet.breed,
      size: this.props.currentPet.size,
      age: this.props.currentPet.age,
      personality: this.props.currentPet.personality,
      gender: this.props.currentPet.gender,
      shelter: this.props.currentPet.shelter,
      shelterZip: this.props.currentPet.shelterZip,
      file: this.props.currentPet.photoUrl
    }
  }

 

  render() {

    console.log(this.props)

    const currentPet = this.props.currentPet;
    let profilePhoto;

    if (!currentPet) return null;



    if (currentPet.photoUrl) {
      profilePhoto = <img 
        className="profile-pic" 
        src={currentPet.photoUrl} 
        alt="profile-photo" 
      /> 
    } else {
      profilePhoto = <div className="profile-pic-default">
          <FontAwesomeIcon icon={faPaw} />
        </div>
    }

    return (
      <div className="my-pets-wrapper">
        <div className="profile-pic-wrapper">
          {profilePhoto}
        </div>

        <div className="pet-details">
          <p className="my-pet-name">
            {currentPet.name}
          </p>

          <ul className="my-pet-details-list">
            <li>
              <label>species: </label>
              {currentPet.species}
            </li>

             <li>
              <label>breed: </label>
              {currentPet.breed}
            </li>

             <li>
              <label>size: </label>
              {currentPet.size}
            </li>

             <li>
              <label>gender: </label>
              {currentPet.gender}
            </li>

             <li>
              <label>age: </label>
              {currentPet.age}
            </li>

             <li>
              <label>personality: </label>
              {currentPet.personality}
            </li>

             <li>
              <label>shelter: </label>
              {currentPet.shelter}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MyPets;
