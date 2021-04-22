import React from 'react';
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

class PickPetItem extends React.Component {
  render() {

    return (
      
      <li className="pet-list-element">
        <Link to={`/feed/${this.props.pet._id}`}>
          <div className="pet-individual" onClick={() => this.props.fetchCurrentPet(this.props.pet._id)}>
            <div className="pet-icon" >
              {
                this.props.pet.photoUrl ? <img src={this.props.pet.photoUrl} />
                : <FontAwesomeIcon icon={faPaw} />
              }
              {/* <FontAwesomeIcon icon={faPaw} /> */}
            </div>
            <span className="home-newpet-name">
              {this.props.pet.name}
            </span>
          </div>   
        </Link>
      </li>
    )
  }
}

export default PickPetItem;