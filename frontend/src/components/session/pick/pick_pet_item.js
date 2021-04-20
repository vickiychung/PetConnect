import React from 'react'

class PickPetItem extends React.Component {
  render() {
    return (
      <li className="user-pet-item"> 
        <span className="user-pet-item-name">
          {this.props.pet.name}
        </span>
      </li>
    )
  }
}

export default PickPetItem;