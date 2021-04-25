import React from 'react';

class ConnectionRequests extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      potato: 0
    }

    this.acceptConnection = this.acceptConnection.bind(this);
    this.declineConnection = this.declineConnection.bind(this);
    this.jank = this.jank.bind(this);
  }

  componentDidMount() {
    this.props.goGetRequestPet(this.props.requesterId)
  }

  jank() {
    this.setState({potato: Math.random()})
    // console.log(this.state)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.potato !== this.state.potato) {
      // console.log('potato has changed')
    }
  }

  acceptConnection() {
    let response = {
      currentPet: this.props.requesterId,
      friend: this.props.petId,
      accepted: true, 
      id: this.props.requestId
    }
    // console.log(this.state)
    this.props.acceptConnectionRequest(response)
    setTimeout(this.jank, 3000)
    // window.location.reload()
    // .then(() => this.props.history.push(`/feed/${this.props.petId}`))
  }

  declineConnection() {
    let response = {
      currentPet: this.props.requesterId,
      friend: this.props.petId,
      accepted: false, 
      id: this.props.requestId
    }
    this.props.acceptConnectionRequest(response)
  }

  

  render() {
    // console.log(this.props)

    let pet = this.props.requestPets[this.props.index];
    if (!pet) {
      return null;
    }
    // console.log(pet)
    return (
      
      <li className="connect-item">
        {/* {this.props.state.entities.connectionRequests.friendData.data.name} */}
        <div onClick={() => this.props.fetchPet(pet.data._id)} >
          {pet.data.name} 
        </div>

        <div className="connect-button-wrapper">
          <button className="connect-button" onClick={this.acceptConnection}>ACCEPT</button>
          <button className="connect-button" onClick={this.declineConnection}>DECLINE</button>
        </div>
      </li>
    )
  }
}

export default ConnectionRequests;