import React from 'react';
import PendingRequestsItem from './pending_requests_item';

class PendingRequests extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sentRequests: this.props.sentRequests
    }
  }

  componentDidMount() {
    this.props.fetchSentRequests(this.props.currentPetId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.sentRequests !== this.props.sentRequests) {
      this.setState({sentRequests: this.props.sentRequests});
    };
  }

  render () {

    if (!this.state.sentRequests) {
      return null;
    };

    return (
      <ul className="request-list">
          {
            this.state.sentRequests.map((request) => (      
              <PendingRequestsItem 
                key={request._id}
                request={request}
                requestId={request._id}
                friendId={this.props.currentPetId}
                friendName={request.friendName}
                currentPetId={request.pet}
                currentPetName={request.petName}
                acceptConnectionRequest={this.props.acceptConnectionRequest}
                fetchPet={this.props.fetchPet}
              />
            ))
          }
        </ul>
    );
  }
}

export default PendingRequests;