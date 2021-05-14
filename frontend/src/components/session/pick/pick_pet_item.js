import React from 'react';
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

class PickPetItem extends React.Component {
  render() {

    return (
      
      <li className="pet-list-element">
        
          <div className="pet-individual">
          <Link to={`/feed/${this.props.pet._id}`}>
            <div>
              {
                this.props.pet.photoUrl ? <div className="pet-img"><img src={this.props.pet.photoUrl} alt="pet" /></div>
                : <div className="pet-icon"><FontAwesomeIcon icon={faPaw} /></div>
              }
            </div>
          </Link>  
            <span className="home-newpet-name">
            <Link to={`/feed/${this.props.pet._id}`}>
              {this.props.pet.name}
            </Link> 
            </span>
            
          </div>
            
      </li>
    )
  }
}

export default PickPetItem;