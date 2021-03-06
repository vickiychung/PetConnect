import React from 'react';

import "./pets_near_you.css";
import PetListItem from './pet_list_item';


class PetList extends React.Component {

  render() {
    if (!this.props.connections || !this.props.connectionRequests || !this.props.sentRequests) return null;

    return (
      <ul className="pets-near-index">
        {
          this.props.list.map(pet => (
            <PetListItem 
              key={pet._id} 
              pet={pet} 
              fetchPet={this.props.fetchPet} 
              createConnectionRequest={this.props.createConnectionRequest}
              connections={this.props.connections}
              connectionRequests={this.props.connectionRequests}
              sentRequests={this.props.sentRequests}
              currentPet={this.props.currentPet}
              users={this.props.users}
            />
          ))
        }

      </ul>
    );
  }
}

export default PetList;