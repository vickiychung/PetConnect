import React from 'react';

class ConnectionsItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.deleteConnection(this.props.connectionId)
  }

  render() {


    let friendName;

    if (this.props.currentPetId === this.props.friendId1) {
      friendName = this.props.pet2Name; 
    } else {
      friendName = this.props.pet1Name; 
    }

    let friendId;
    if (this.props.currentPetId === this.props.friendId1) {
      friendId = this.props.friendId2;
    } else {
      friendId = this.props.friendId1;
    }

    return (
      <li className='connections-item' key={this.props.connectionId}>
        <div onClick={() => this.props.fetchPet(friendId)}>
          <div className='connections-name'>{friendName}</div>
        </div>
        <div className='remove-connection-button' onClick={this.handleDelete}>
          REMOVE
        </div>
      </li>
    );
  }
}

export default ConnectionsItem;