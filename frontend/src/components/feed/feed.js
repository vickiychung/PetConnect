import React from 'react';

import "./feed.css"
import NavbarContainer from '../navbar/navbar_container';
import ConnectPotContainer from '../connections/connect_pot_container';
import PetsNearYouContainer from './pets_near_you/pets_near_you_container'

class Feed extends React.Component {

  componentDidMount() {
    this.props.fetchPets()
  }

  render() {
    if (this.props.pets === undefined) {
      return null
    }

    console.log(this.props.pets)

    return (
      <div className="feed-wrapper">
        <NavbarContainer/>
       
        <div className="feed-lists-wrapper">
          <div className="pets-near-you-list">
            <ul>
              {this.props.pets.map(pet => (
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