import React from 'react';

class MyPets extends React.Component {

  render() {
    const { currentPet } = this.props;
    let profilePhoto;

    if (!currentPet) return null;

    if (currentPet.photoUrl) {
      profilePhoto = <img src={currentPet.photoUrl} alt="profile-photo" />
    }

    console.log(currentPet);

    return (
      <div className="my-pets-wrapper">
        <div>
          {profilePhoto}
          test
        </div>
        TEST
      </div>
    );
  }
}

export default MyPets;
