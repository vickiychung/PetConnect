import React from 'react';

class ConnectPotItem extends React.Component {
  constructor(props) {
    super(props);
  }

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