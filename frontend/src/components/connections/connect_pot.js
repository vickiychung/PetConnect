import React from 'react';
import ConnectPotItem from './connect_pot_item';

class ConnectPot extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {
            this.props.names.map(name => (
              <ConnectPotItem name={name} />
            ))
          }
        </ul>
      </div>
    )
  };
};

export default ConnectPot;