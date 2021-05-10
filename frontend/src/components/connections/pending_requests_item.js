import React from 'react';

class PendingRequestsItem extends React.Component {
  constructor(props) {
    super(props);

    this.declineConnection = this.declineConnection.bind(this);
  }

  declineConnection() {
    let response = {
      currentPet: this.props.currentPetId,
      friend: this.props.friendId,
      accepted: false, 
      id: this.props.requestId
    }
    this.props.acceptConnectionRequest(response)
  }

  render() {
    
    return (
    <li className='connections-item'>
      <div onClick={() => this.props.fetchPet(this.props.friendId)}>
        <div className='connections-name'>{this.props.friendName}</div>
      </div>
      <div className='remove-connection-button' onClick={this.declineConnection}>
          CANCEL
      </div>
    </li>

    )
  }
}

export default PendingRequestsItem;