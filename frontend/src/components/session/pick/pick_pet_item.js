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
            <div>
              {
                this.props.pet.photoUrl ? <div className="pet-img"><img src={this.props.pet.photoUrl} /></div>
                : <div className="pet-icon"><FontAwesomeIcon icon={faPaw} /></div>
              }
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