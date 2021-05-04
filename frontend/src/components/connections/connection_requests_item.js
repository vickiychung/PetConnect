import React from 'react';

class ConnectRequestItem extends React.Component {
  constructor(props) {
    super(props);

    this.acceptConnection = this.acceptConnection.bind(this);
    this.declineConnection = this.declineConnection.bind(this);
  }

  componentDidMount() {
    this.props.goGetRequestPet(this.props.friendId);
  }

  acceptConnection() {
    let response = {
      currentPet: this.props.currentPetId,
      currentPetName: this.props.currentPetName,
      friend: this.props.friendId,
      friendName: this.props.friendName,
      accepted: true, 
      id: this.props.requestId
    }
    this.props.acceptConnectionRequest(response)
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
    
    if (!this.props.friendId || 
      !this.props.friendPet ||
      this.props.friendPet.data === null
      ) {
      return null;
    }

    return (
      <li className="connect-item">
        <div onClick={() => this.props.fetchPet(this.props.friendId)}>
          <div className="request-name">{this.props.friendPet.data.name}</div>
        </div>
        <div className="connect-button-wrapper">
          <button className="connect-button request-accept" onClick={this.acceptConnection}>ACCEPT</button>
          <button className="connect-button request-decline" onClick={this.declineConnection}>DECLINE</button>
        </div>
      </li>
    )
  }
}

export default ConnectRequestItem;