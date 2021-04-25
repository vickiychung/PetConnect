import React from 'react';

class ConnectionsItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    if (this.props.currentPetId === this.props.friendId1) {
      this.props.goGetPet(this.props.friendId2) 
    } else {
      this.props.goGetPet(this.props.friendId1)
    }
  }

  handleDelete() {
    this.props.deleteConnection({id: this.props.connectionId})
  }

  render() {
    console.log(this.props)

    if (!this.props.friendId1 || !this.props.friendId2 || !this.props.friendPet) {
      return null;
    }
    let friendId;
    if (this.props.currentPetId === this.props.friendId1) {
      friendId = this.props.friendId2;
    } else {
      friendId = this.props.friendId1;
    }

    return (
      <li key={this.props.connectionId}>
        <div onClick={() => this.props.fetchPet(friendId)}>
          {this.props.friendPet.data.name}
        </div>
      </li>
    );
  }
}

export default ConnectionsItem;