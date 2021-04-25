import React from 'react';
import ConnectionsItem from './connections_item';

class Connections extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      petFriends: this.props.petFriends,
      connections: this.props.connections,
      updateId: this.props.updateId
    }
  }

  componentDidMount() {
    this.props.fetchConnections(this.props.currentPetId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.updateId !== this.props.updateId) {

      //this does not work as intended. Component does not update on pet change
      //through the dropdown despite any of the code commented below. if you have 
      //ideas/suggestions, please try it out or let me know - Ali

      // this.setState({updateId: this.props.updateId})
      // this.forceUpdate();
      // console.log("is this hit")

    }
    if (prevProps.connections !== this.props.connections) {
      this.setState({connections: this.props.connections});
    };
    if (prevProps.petFriends !== this.props.petFriends) {
      this.setState({petFriends: this.props.petFriends});
    };
    
  }

  render() {

    if (!this.state.connections || !this.props.petFriends) {
      return null;
    };
    
    return (
      <ul className="request-list">
        {
          this.state.connections.map((connection, i) => (
            
            <ConnectionsItem
              key={connection._id}
              currentPetId={this.props.currentPetId}
              connectionId={connection._id} 
              friendId1={connection.pet1}
              friendId2={connection.pet2}
              friendPet={this.state.petFriends[i]}
              goGetPet={this.props.goGetPet}
              deleteConnection={this.props.deleteConnection}
              fetchPet={this.props.fetchPet}
              index={i}
            />
          ))
        }
      </ul>
    )
  }
}

export default Connections;