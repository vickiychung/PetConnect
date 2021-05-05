import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

class PetListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      connect: false,
      pending: false
    }

    this.handleClick = this.handleClick.bind(this);
    this.sendConnectionRequest = this.sendConnectionRequest.bind(this);
  }

  componentDidUpdate(prevProps) {
    
  }

  sendConnectionRequest() {
    let connection = {
      friend: this.props.pet,
      currentPet: this.props.currentPet
    }
    this.props.createConnectionRequest(connection)  
  }

  handleClick() {
    this.props.fetchPet(this.props.pet._id)
  }

  render() {
    console.log(this.props)

    const connected = () => {
      let connect = false;
      let pending = false;
      this.props.connections.forEach(connection => {
        if ((connection.pet1 === this.props.pet._id && connection.pet2 === this.props.currentPet._id) || 
          (connection.pet1 === this.props.currentPet._id && connection.pet2 === this.props.pet._id)) {
            connect = true
        }
      })
      this.props.connectionRequests.forEach(connectionRequest =>{
        if ((connectionRequest.friend === this.props.pet._id && connectionRequest.pet === this.props.currentPet._id) || 
        (connectionRequest.pet === this.props.pet._id && connectionRequest.friend === this.props.currentPet._id)){
          pending = true
        }
      })
      if (connect) {
        return <button className="pets-connect-button-2">CONNECTED</button>
      } else if (pending) {
        return <button className="pets-connect-button-3">PENDING</button>
      } else {
        return <button className='pets-connect-button' onClick={this.sendConnectionRequest}>CONNECT</button>
      }
    }

    let profilePhoto;

    if (this.props.pet.photoUrl) {
      profilePhoto = <img 
        className="pets-near-photo"
        src={this.props.pet.photoUrl} 
        alt="profile" 
      /> 
    } else {
      profilePhoto = <div className="pets-near-photo-default">
        <FontAwesomeIcon icon={faPaw} />
      </div>
    }

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
}

export default PetListItem;