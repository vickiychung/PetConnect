import React from 'react';

import "./feed.css"
import NavbarContainer from '../navbar/navbar_container';
import PetsNearYouContainer from './pets_near_you/pets_near_you_container'
import MyPetsContainer from './my_pets/my_pets_container';

class Feed extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      currentPetId: this.props.match.params.petId
    }
    
  }
  
  componentDidMount() {
    this.props.fetchUsers()
    this.props.fetchPets()
  }

  // componentWillUnmount() {
  //   this.props.fetchPets()
  // }

  render() {
    if (!this.props.pets || !this.props.currentUser || !Array.isArray(this.props.users)) {
      return null
    }
  const pet = this.props.pets.filter((pet) => pet._id === this.state.currentPetId);

  const userPets = [];
  
  this.props.pets.forEach(pet => {
    if (pet.user === this.props.currentUser) {
      userPets.push(pet)
    }
  })

  let matchedUsers = [];


  this.props.users.forEach(user => {
    if (this.props.currentOwner.zipcode === user.zipcode && this.props.currentUser !== user._id) {
      matchedUsers.push(user)
    }
  })

  let matches = [];
  
  this.props.pets.forEach(pet => {
    matchedUsers.forEach(user => {
      if (pet.user ===  user._id) {
        matches.push(pet)
      }
    })
  })

  

  this.props.pets.forEach(pet => {

  })


    return (
      <div className="feed-wrapper">
        <div className="navbar-container">
          <NavbarContainer userPets={userPets}/>
        </div>

        <div className="feed-main-wrapper">
          <div className="feed-lists-wrapper">
            <div className="pets-near-you-list">
              <ul>
                {matches.map(pet => (
                  <PetsNearYouContainer key={pet._id} pet={pet}/>
                ))}
              </ul>
            </div>

            {/* <div className="middle-feed">

            </div> */}

            <div className="pets-shelter-list">

            </div>
          </div>

          <div className="my-pets-container">
            <MyPetsContainer />
          </div>
        </div>
      </div>
    )
  }
}

export default Feed;