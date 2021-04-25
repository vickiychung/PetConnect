import React from 'react';
import ConnectRequestItem from './connection_requests_item';

class ConnectionRequests extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      connectionRequests: this.props.connectionRequests,
      requestPets: this.props.requestPets
    }
  }

  componentDidMount() {
    this.props.fetchConnectionRequests(this.props.currentPetId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.connectionRequests !== this.props.connectionRequests) {
      this.setState({connectionRequests: this.props.connectionRequests});
    };
    if (prevProps.requestPets !== this.props.requestPets) {
      this.setState({requestPets: this.props.requestPets});
    };
  }

  
  render() {
    
    if (!this.state.connectionRequests || !this.state.requestPets) {
      return null;
    }
    console.log(this.state.connectionRequests)
  
    return (
      <ul className="request-list">
        {
          this.state.connectionRequests.map((request, i) => (
            <ConnectRequestItem
              key={request._id}
              requestId={request._id}
              currentPetId={this.props.currentPetId}
              friendId={request.pet}
              friendPet={this.state.requestPets[i]}
              goGetRequestPet={this.props.goGetRequestPet}
              index={i}
              acceptConnectionRequest={this.props.acceptConnectionRequest}
              fetchPet={this.props.fetchPet}
            />
          ))
        }
      </ul>
    );
  }
}

export default ConnectionRequests;