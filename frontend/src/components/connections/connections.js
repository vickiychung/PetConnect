// import React from 'react';

// class Connections extends React.Component {
//   constructor(props) {
//     super(props);

//     // this.handleDelete = this.handleDelete.bind(this);
//   }

//   componentDidMount() {
//     this.props.goGetPet(this.props.friend)
//     console.log(this.props.petFriend)
//   }

//   handleDelete() {
//     // console.log(this.props.connectionId)
//     this.props.deleteConnection({id: this.props.connectionId})
//     // this.props.deleteConnection(this.props.connectionId)
//   }

//   render() {
//     // console.log(this.props);

//     let pet = this.props.petFriend[this.props.index];
//     if (!pet) {
//       return null;
//     }

//     if (pet.data === null) {
//       return null;
//     }
    
//     return (
//       <li className="connection-item" onClick={() => this.props.fetchPet(pet.data._id)}>
//          {pet.data.name}
//         {/* <div className="connect-button-wrapper">
//           <button className="connect-button" onClick={this.handleDelete}>DELETE</button>
//         </div> */}
//       </li>
//     )
//   }
// }

// export default Connections;

import React from 'react';
import ConnectionsItem from './connections_item';

class Connections extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      petFriends: this.props.petFriends,
      connections: this.props.connections
    }
  }

  componentDidMount() {
    this.props.fetchConnections(this.props.currentPetId);
  }

  componentDidUpdate(prevProps)  {
    if (prevProps.petFriends !== this.props.petFriends) {
      this.setState({petFriends: this.props.petFriends});
    };
    if (prevProps.connections !== this.props.connections) {
      this.setState({connections: this.props.connections});
    };
  }

  render() {

    console.log(this.props)
    if (!this.state.petFriends || !this.state.Connections) {
      return null;
    };

    return (
      <ul className="request-list">
        {
          this.state.connections.map((connection, i) => (
            <ConnectionsItem
              key={connection._id}
              connectionId={connection._id} 
              friendId={connection.pet1}
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