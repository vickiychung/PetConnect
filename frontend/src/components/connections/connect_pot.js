import React from 'react';
import ConnectPotItem from './connect_pot_item';

class ConnectPot extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: []
    }
  }

  componentDidMount() {
    this.props.fetchPets();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.pets !== this.props.pets) {
      this.setState({pets: this.props.pets})
    }
  }

  render() {
    console.log(this.props);

    let pets = this.state.pets;
    if (typeof pets === "object") {
      pets = Object.values(this.state.pets);
    }

    return (
      <div>
        <ul>
          {
            pets.map((pet, index) => (
              <ConnectPotItem key={index} pet={pet} /> 
            ))
          }
        </ul>
      </div>
    )
  };
};

export default ConnectPot;