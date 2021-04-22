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
    this.props.fetchPets()
    this.props.fetchUsers()
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
    if (!Array.isArray(this.props.pets) || !this.props.currentUser || !Array.isArray(this.props.users)) {
      return null
    }
  let currentPet = null
    this.props.pets.forEach(pet => {
    if (pet._id === this.props.currentPetId) {
      currentPet = pet
    }
  })
  // const pet = this.props.pets.find(pet => pet._id === this.state.currentPetId);

    console.log(this.props.selectedPet)

    // console.log(this.props)
  let currentPet = null
  const pet = this.props.pets.find(pet => pet._id === this.state.currentPetId);

  this.props.pets.forEach(pet => {
    if (pet._id === this.props.currentPetId) {
      currentPet = pet
    }
  })
  console.log(currentPet)

  const filterByZip = () => {
    return (
      <ul>
        {nearMatches.map(pet => (
          <PetsNearYouContainer key={pet._id} pet={pet}/>
        ))}
      </ul>
    )
  }
  
  const filterByShelter = () => {
    return (
      <ul>
        {shelterMatches.map(pet => (
          <PetsNearYouContainer key={pet._id} pet={pet}/>
        ))}
      </ul>
    )
  }

  const filterBySpecies = () => {
    return (
      <ul>
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
  // const pet = this.props.pets.filter((pet) => pet._id === this.state.currentPetId);

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

  // console.log(this.props.pets)

  // this.props.pets.forEach(pet => {
  //   console.log(pet)
  //   if (compareWords(changeString(pet.shelter), changeString(this.props.currentPet.shelter)) && pet._id !== this.props.currentPet._id) {
  //     shelterMatches.push(pet)
  //   }
  // })



  this.props.pets.forEach(pet => {
    // console.log(pet.shelter)
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
          <div className="tabs">

        </div>
      </div>
        <div className="feed-lists-wrapper">
          <div className="pets-near-you-list">
            <ul>
              {toggle()}
            </ul>
          </div>

            {/* <div className="middle-feed">

            </div> */}

          <div className="pets-shelter-list">
            <div className="pets-img-left">
              {/* place holder image */}
              <img className="pets-img-left-1" src={pic}></img>
              {
                //these are to display on right page of book. photoUrl is dependent on whether it exists. 
                this.props.selectedPet ? 
                <div>
                  name: {this.props.selectedPet.name}
                  species: {this.props.selectedPet.species}
                  breed: {this.props.selectedPet.breed}
                  size: {this.props.selectedPet.size}
                  gender: {this.props.selectedPet.gender}
                  age: {this.props.selectedPet.age}
                  personality: {this.props.selectedPet.personality}
                  shelter: {this.props.selectedPet.shelter}
                </div> : null
              } 
            </div>
          </div>
        </div>
        <div className="space">

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