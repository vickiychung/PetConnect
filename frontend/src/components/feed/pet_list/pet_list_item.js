import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

class PetListItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
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
                {/* {connected()} */}
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