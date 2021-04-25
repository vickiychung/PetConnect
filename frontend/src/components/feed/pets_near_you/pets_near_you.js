import React from 'react';
import "./pets_near_you.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

class PetsNearYou extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      users: []
    }

    this.handleClick = this.handleClick.bind(this);
    this.sendConnectionRequest = this.sendConnectionRequest.bind(this);
  }

  // componentDidMount() {
  //   this.props.fetchAllConnections()
  // }

  petsNearYou() {
    if (this.props.pets === undefined) {
      return null
    }
  }

  handleClick() {
    this.props.fetchPet(this.props.pet._id)
  }

  sendConnectionRequest() {
    let connection = {
      friend: this.props.pet._id,
      currentPet: this.props.currentPet
    }
    this.props.createConnectionRequest(connection)
  }

  render() {
    if (this.props.pets === undefined) {
      return null
    }
    let pets = this.props.pets


    let matchZip = (pets) => {
      let matches = [];

      for (let i = 0; i < pets.length; i++) {
        let pet = pets[i];
        if (this.props.user.zipcode === pet.shelterZip) {
          matches.push(pet.name)
        }
      }
      return matches
    }

    let isMatch = () => {
      if (this.props.pet.shelterZip === this.props.user.zipcode) {
        return true
      }
      return false
    }

    let profilePhoto;

    if (this.props.pet.photoUrl) {
      profilePhoto = <img 
        className="pets-near-photo"
        src={this.props.pet.photoUrl} 
        alt="profile-photo" 
      /> 
    } else {
      profilePhoto = <div className="pets-near-photo-default">
        <FontAwesomeIcon icon={faPaw} />
      </div>
    }

    let showPet = () => {
      if (!this.props.connections) return null
      // console.log(this.props.pet)
      // console.log(this.props.currentPet)
      let connected = () => {
        let connect = false
        this.props.connections.forEach(connection => {
          if ((connection.pet1 === this.props.pet._id && connection.pet2 === this.props.currentPet._id) || (connection.pet1 === this.props.currentPet._id && connection.pet2 === this.props.pet._id)) {
            connect = true
          }
        })
        if (connect) {
          return <button className="pets-connect-button-2">CONNECTED</button>
        } else {
          return <button className='pets-connect-button' onClick={this.sendConnectionRequest}>CONNECT</button>
        }
      }
      // console.log(connected())

      return (
        <li onClick={this.handleClick} className="pets-near-item">
          <div className="pets-near-photo-wrapper">
            {profilePhoto}
          </div>

          <div className="pets-near-detail-wrapper">
            <div className="pets-near-name">
              <span className='pets-near-name-container'>
                {this.props.pet.name}
                {connected()}
                {/* <button className='pets-connect-button' onClick={this.sendConnectionRequest}>CONNECT</button> */}
              </span>
            </div>

            <span className="pets-near-details">
              AGE: <span className="details-lower">{this.props.pet.age}</span>
            </span>

            <span className="pets-near-details">
              GENDER: <span className="details-lower">{this.props.pet.gender}</span>
            </span>

            <span className="pets-near-details">
              PERSONALITY: <span className="details-lower">{this.props.pet.personality}</span>
            </span>

            <span className="pets-near-details">
              SHELTER: <span>{this.props.pet.shelter}</span>
            </span>
          </div>
        </li>
      )
    }

    return isMatch ? showPet() : null
  }
}

export default PetsNearYou;