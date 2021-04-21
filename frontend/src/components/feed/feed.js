import React from 'react';

import "./feed.css"
import NavbarContainer from '../navbar/navbar_container';
import PetsNearYouContainer from './pets_near_you/pets_near_you_container'

class Feed extends React.Component {

  componentDidMount() {
    this.props.fetchUsers()
    this.props.fetchPets()
  }

  // componentWillUnmount() {
  //   this.props.fetchPets()
  // }

  render() {
    if (!this.props.pets || !this.props.currentUser) {
      return null
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

  console.log(matchedUsers)
  // console.log(Object.values(matchedUsers._id))
  let matches = [];
  
  this.props.pets.forEach(pet => {
    matchedUsers.forEach(user => {
      if (pet.user._id ===  user._id) {
        matches.push(pet)
      }
    })
  })

  console.log(matches)

  // const otherPets = () => {
  //   const userPets = [];
  //   const otherPets = [];

  //   this.props.pets.map(pet => (
  //     pet.user === this.props.currentUser ? (
  //       userPets.push(pet)
  //   ) :
  //     otherPets.push(pet)
  // ));
  //   return otherPets;
  // }
  
  // const nearPets = () => {
  //   let theOtherPets = otherPets();
  //   const nearPets = [];

  //   theOtherPets.forEach(pet => {
  //     let user = this.props.fetchUser(pet.user)

  //     if (this.props.currentUser.zipcode === user.zipcode) {
  //       nearPets.push(pet)
  //     }
  //   })
  //   return nearPets;
  // }

  // const nearPets = () => {
  //   let pets = this.props.pets
  //   let nearPets = [];

  //   for (let i = 0; i < pets.length; i++) {
  //     let pet = pets[i];
  //     let user = this.props.fetchUser(pet.user)

  //     if (pet.user !== this.props.currentUser && this.props.currentUser.zipcode === user.zipcode) {
  //       nearPets.push(pet)
  //     }
  //   }
  //   return nearPets;
  // }

  // let theNearPets = nearPets()
 

  // console.log(theNearPets)
    
  // for (let i = 0; i < otherPets.length - 1; i++) {
  //   let pet = otherPets[i];
  //   let user = this.props.fetchUser(pet.user)

  //   if (this.props.currentUser.zipcode === user.zipcode) {
  //     console.log(user.zipcode)
  //     console.log(this.props.currentUser.zipcode)
  //     nearPets.push(pet)
  //   }
  // }




    return (
      <div className="feed-wrapper">
        <NavbarContainer userPets={userPets}/>
       
        <div className="feed-lists-wrapper">
          <div className="pets-near-you-list">
            <ul>
              {/* {theNearPets.map(pet => (
                <PetsNearYouContainer key={pet._id} pet={pet}/>
              ))} */}
            </ul>
          </div>

          {/* <div className="middle-feed">

          </div> */}

          <div className="pets-shelter-list">

          </div>
        </div>


      </div>
    )
  }
}

export default Feed;