import React from 'react';

class ConnectPotItem extends React.Component {


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


export default ConnectPotItem;