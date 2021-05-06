import React from 'react';
import ConnectionsItem from './connections_item';

class Connections extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      connections: this.props.connections,
      updateId: this.props.updateId
    }
  }

  componentDidMount() {
    this.props.fetchConnections(this.props.currentPetId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.connections !== this.props.connections) {
      this.setState({connections: this.props.connections});
    };    
  }

  render() {

    if (!this.state.connections) {
      return null;
    };
    
    return (
      <ul className="connect-list">
        {
          this.state.connections.map((connection, i) => (
            
            <ConnectionsItem
              key={connection._id || Math.floor(Math.random() * 1000000)}
              currentPetId={this.props.currentPetId}
              connectionId={connection._id} 
              friendId1={connection.pet1}
              friendId2={connection.pet2}
              pet1Name={connection.pet1Name}
              pet2Name={connection.pet2Name}
              deleteConnection={this.props.deleteConnection}
              fetchPet={this.props.fetchPet}
            />
          ))
        }
      </ul>
    )
  }
}

export default Connections;