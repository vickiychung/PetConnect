import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

class PickPetItem extends React.Component {
  render() {
    return (
      <li className="user-pet-item">
        <div>

          <span className="user-pet-item-name">
            {this.props.pet.name}
          </span>
        </div> 
      </li>
    )
  }
}

export default PickPetItem;