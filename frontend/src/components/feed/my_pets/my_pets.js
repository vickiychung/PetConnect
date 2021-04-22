import React from 'react';

class MyPets extends React.Component {
  
  render() {
    const { currentPet } = this.props;
    let profilePhoto;

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
        <div>
          {profilePhoto}
        </div>
      </div>
    );
  }
}

export default MyPets;
