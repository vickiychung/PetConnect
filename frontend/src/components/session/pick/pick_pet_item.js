import React from 'react';
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

class PickPetItem extends React.Component {
  render() {

    return (
      
      <li className="pet-list-element">
        
          <div className="pet-individual">
            <div>
              {
                this.props.pet.photoUrl ? <div className="pet-img"><Link to={`/feed/${this.props.pet._id}`}><img src={this.props.pet.photoUrl} alt="pet" /></Link></div>
                : <div className="pet-icon"><FontAwesomeIcon icon={faPaw} /></div>
              }
            </div>
            <Link to={`/feed/${this.props.pet._id}`}>
            <span className="home-newpet-name">
              {this.props.pet.name}
            </span>
            </Link>
          </div>   
      </li>
    )
  }
}

export default PickPetItem;