import React from 'react';
import ConnectRequestItem from './connection_requests_item';

class ConnectionRequests extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      connectionRequests: this.props.connectionRequests,
    }
  }

  componentDidMount() {
    this.props.fetchConnectionRequests(this.props.currentPetId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.connectionRequests !== this.props.connectionRequests) {
      this.setState({connectionRequests: this.props.connectionRequests});
    };
  }

  render() {
    if (!this.state.connectionRequests) {
      return null;
    };

    return (
      <div>
        <ul className="request-list">
          {
            this.state.connectionRequests.map((request) => (
              <ConnectRequestItem
                key={request._id}
                requestId={request._id}
                currentPetId={this.props.currentPetId}
                currentPetName={request.friendName}
                friendId={request.pet}
                friendName={request.petName}
                acceptConnectionRequest={this.props.acceptConnectionRequest}
                fetchPet={this.props.fetchPet}
                fetchConnections={this.props.fetchConnections}
              />
            ))
          }
        </ul>
      </div>
    );
  }
}

export default ConnectionRequests;