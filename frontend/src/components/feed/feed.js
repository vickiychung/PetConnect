import React from 'react';

import "./feed.css"
import NavbarContainer from '../navbar/navbar_container';
import PetsNearYouContainer from './pets_near_you/pets_near_you_container'

class Feed extends React.Component {

  componentDidMount() {
    this.props.fetchPets()
  }

  render() {
    if (!this.props.pets) {
      return null
    }

    const userPets = [];
    const otherPets = [];
    this.props.pets.map(pet => (
      pet.user === this.props.currentUser ? (
        userPets.push(pet)
      ) :
      otherPets.push(pet)
    ));

    return (
      <div className="feed-wrapper">
        <NavbarContainer userPets={userPets}/>
       
        <div className="feed-lists-wrapper">
          <div className="pets-near-you-list">
            <ul>
              {otherPets.map(pet => (
                <PetsNearYouContainer key={pet._id} pet={pet}/>
              ))}
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