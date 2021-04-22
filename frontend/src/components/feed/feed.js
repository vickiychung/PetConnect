import React from 'react';

import "./feed.css"
import NavbarContainer from '../navbar/navbar_container';
import PetsNearYouContainer from './pets_near_you/pets_near_you_container'
import MyPetsContainer from './my_pets/my_pets_container';
import pic from '../session/login_signup/background.jpg'

class Feed extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      toggled: "zip",
      // currentPetId: this.props.match.params.petId

    }

    this.handleZip = this.handleZip.bind(this);
    this.handleSpecies = this.handleSpecies.bind(this);
    this.handleShelter = this.handleShelter.bind(this);
  }

  
  componentDidMount() {
    this.props.fetchUsers()
    this.props.fetchPets()
  }

  handleSpecies() {
    this.setState({toggled: 'species'})
  }

  handleZip() {
    this.setState({toggled: 'zip'})
  }

  handleShelter() {
    this.setState({toggled: 'shelter'})
  }

  render() {
    if (!this.props.pets || !this.props.currentUser || !Array.isArray(this.props.users)) {
      return null
    }

    let currentPet = null
      this.props.pets.forEach(pet => {
      if (pet._id === this.props.currentPetId) {
        currentPet = pet
      }
    })
  // const pet = this.props.pets.find(pet => pet._id === this.state.currentPetId);

    const filterByZip = () => {
      return (
        <ul className="pets-near-index">
          {nearMatches.map(pet => (
            <PetsNearYouContainer key={pet._id} pet={pet}/>
          ))}
        </ul>
      )
    }
    
    const filterByShelter = () => {
      return (
        <ul className="pets-near-index">
          {shelterMatches.map(pet => (
            <PetsNearYouContainer key={pet._id} pet={pet}/>
          ))}
        </ul>
      )
    }

    const filterBySpecies = () => {
      return (
        <ul className="pets-near-index">
          {speciesMatches.map(pet => (
            <PetsNearYouContainer key={pet._id} pet={pet}/>
          ))}
        </ul>
      )
    }


    const toggle = () => {
      if (this.state.toggled === 'zip') {
        return filterByZip();
      } else if (this.state.toggled === 'shelter') {
        return filterByShelter();
      } else if (this.state.toggled === 'species') {
        return filterBySpecies();
      }
    }

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

    //PETS NEAR YOU MATCHES
    let nearMatches = [];
    
    this.props.pets.forEach(pet => {
      matchedUsers.forEach(user => {
        if (pet.user ===  user._id) {
          nearMatches.push(pet)
        }
      })
    })


    //Helper methods for same shelter

    let changeString = function(str) {
      let word = str.split(" ")
      let noSpaces = word.join("")
      return noSpaces.toLowerCase()
    }
    
    let compareWords = function(word1, word2) {
      if (word1.length < 4 || word2.length < 4) return false

      if ((word1.length > word2.length) && (word1.includes(word2))) {
        return true
      } else if ((word2.length > word1.length) && (word2.includes(word1))){
        return true
      } else if (word1 === word2) {
        return true
      } else {
        return false
      }
    }
    //SHELTER MATCHES
    let shelterMatches = [];

    this.props.pets.forEach(pet => {
      if (compareWords(changeString(pet.shelter), changeString(currentPet.shelter)) && pet._id !== currentPet._id) {
        shelterMatches.push(pet)
      }
    })

    let speciesMatches = [];

    this.props.pets.forEach(pet => {
      if (pet.species.toLowerCase() === currentPet.species.toLowerCase() && pet._id !== currentPet._id) {
        speciesMatches.push(pet)
      }
    })

    let profilePhoto;
    if (this.props.selectedPet) {
      this.props.selectedPet.photoUrl ? 
        profilePhoto =  <img className="selected-pet-img" src={this.props.selectedPet.photoUrl}></img> :
        profilePhoto =  <img className="selected-pet-img" src={pic}></img>
    }

    return (
      <div className="feed-wrapper">

        <div className="navbar-container">
          <NavbarContainer userPets={userPets}/>
        </div>

        <div className="feed-main-wrapper">

          <div className="tabs-wrapper">
            <div className="tabs">
              <div className="tabs-1">
                <button onClick={this.handleZip} className="tabs-2">Location</button>
              </div>

              <div className="tabs-1">
                <button onClick={this.handleShelter} className="tabs-2">Shelter</button>
              </div>

              <div className="tabs-1">
                <button onClick={this.handleSpecies} className="tabs-2">Species</button>
              </div>
            </div>
          </div>

        <div className="feed-lists-wrapper">
          <div className="pets-near-you-list">
            <ul>
              {toggle()}
            </ul>
          </div>

          <div className="pets-shelter-list">
            <div className="selected-pet-wrap">
              {profilePhoto}

              {
                this.props.selectedPet ? 
                <ul className="selected-pet-details-list">
                  <li>
                    <label>name: </label>
                    {this.props.selectedPet.name}
                  </li>

                   <li>
                    <label>species: </label>
                    {this.props.selectedPet.species}
                  </li>

                   <li>
                    <label>breed: </label>
                    {this.props.selectedPet.breed}
                  </li>

                   <li>
                    <label>size: </label>
                    {this.props.selectedPet.size}
                  </li>

                   <li>
                    <label>gender: </label>
                    {this.props.selectedPet.gender}
                  </li>

                   <li>
                    <label>age: </label>
                    {this.props.selectedPet.age}
                  </li>

                   <li>
                    <label>personality: </label>
                    {this.props.selectedPet.personality}
                  </li>

                   <li>
                    <label>shelter: </label>
                    {this.props.selectedPet.shelter}
                  </li>
                </ul> : null
              } 
            </div>
          </div>
        </div>
    
        <div className="my-pets-container">
          <MyPetsContainer currentPet={currentPet}/>
        </div>
      </div>
    </div>
    )
  }
}

export default Feed;