import React from 'react';
import ConnectRequestItem from './connection_requests_item';

class ConnectionRequests extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      connectionRequests: this.props.connectionRequests,
      sentRequests: this.props.sentRequests
    }
  }

  componentDidMount() {
    this.props.fetchConnectionRequests(this.props.currentPetId);
    this.props.fetchSentRequests(this.props.currentPetId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.connectionRequests !== this.props.connectionRequests) {
      this.setState({connectionRequests: this.props.connectionRequests});
    };
    if (prevProps.sentRequests !== this.props.sentRequests) {
      this.setState({sentRequests: this.props.sentRequests});
    };
  }

  render() {
    console.log(this.props)
    console.log(this.state)
    if (!this.state.connectionRequests || !this.state.sentRequests) {
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
              />
            ))
          }
        </ul>
        <ul className="request-list">
          {/* test */}
          {
            this.state.sentRequests.map((request) => (
              request.name
              // <ConnectRequestItem
              //   key={request._id}
              //   requestId={request._id}
              //   currentPetId={this.props.currentPetId}
              //   currentPetName={request.friendName}
              //   friendId={request.pet}
              //   friendName={request.petName}
              //   acceptConnectionRequest={this.props.acceptConnectionRequest}
              //   fetchPet={this.props.fetchPet}
              // />
            ))
          }
        </ul>

      </div>
    );
  }
}

export default ConnectionRequests;