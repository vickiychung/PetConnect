import React from 'react';

class ConnectPotItem extends React.Component {


  render() {
    return (
      <li>
        <span>
          {this.props.name}
        </span>
      </li>
    )
  }
}


export default ConnectPotItem;