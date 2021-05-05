import React from 'react';

import "./pets_near_you.css";
import PetListItem from './pet_list_item';


class PetList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchAllConnectionRequests();
  }

  render() {
    console.log(this.props)

      

    return (
      <ul className="pets-near-index">
        {
          this.props.list.map(pet => (
            <PetListItem 
              key={pet._id} 
              pet={pet} 
              fetchPet={this.props.fetchPet} 
              createConnectionRequest={this.props.createConnectionRequest}
            />
          ))
        }

      </ul>
    );
  }
}

export default PetList;