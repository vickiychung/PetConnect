import React from 'react';

class ConnectionRequests extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      potato: 0
    }

    this.acceptConnection = this.acceptConnection.bind(this);
    this.jank = this.jank.bind(this);
  }

  componentDidMount() {
    this.props.goGetPet(this.props.requesterId)
  }

  jank() {
    this.setState({potato: Math.random()})
    console.log(this.state)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.potato !== this.state.potato) {
      console.log('potato has changed')
    }
  }

  acceptConnection() {
    let response = {
      currentPet: this.props.requesterId,
      friend: this.props.petId,
      accepted: true, 
      id: this.props.requestId
    }
    console.log(this.state)
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
    // this.props.goGetPet(this.props.requesterId)
    // if (!this.props.friend) {
    //   return null
    // }
    // this.props.goGetPet(this.props.requesterId)
    // console.log(this.props.state.entities.connectionRequests.friendData.data.name)
    // console.log(this.props)
    // console.log(this.props.requesterId)
    // console.log(this.props.state.entities.connectionRequests.friendData.data.name)
    // console.log(this.props.state)
    return (
      
      <li>
        {/* {this.props.state.entities.connectionRequests.friendData.data.name} */}
        {this.props.requesterId} 
        <button onClick={this.acceptConnection}>ACCEPT</button>
        <button onClick={this.declineConnection}>DECLINE</button>

      </li>
    )
  }
}

export default ConnectionRequests;