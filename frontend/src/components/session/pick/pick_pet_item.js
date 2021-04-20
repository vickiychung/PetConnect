import React from 'react'

class PickPetItem extends React.Component {
  render() {
    return (
      <li>
        <span>
          {this.props.pet.name}
        </span>
      </li>
    )
  }
}

export default PickPetItem;