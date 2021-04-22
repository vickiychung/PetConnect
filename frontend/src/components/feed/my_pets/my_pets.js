import React from 'react';
import './my_pets.css';

class MyPets extends React.Component {
  
  render() {
    const currentPet = this.props.currentPet;
    let profilePhoto;

    console.log(currentPet)
    if (!currentPet) return null;

    if (currentPet.photoUrl) {
      profilePhoto = <img 
        className="profile-pic" 
        src={currentPet.photoUrl} 
        alt="profile-photo" 
      />
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
