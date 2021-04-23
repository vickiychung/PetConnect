import React from 'react';

class Connections extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.getConnection = this.getConnection.bind(this);
  }

  componentDidMount() {
    this.props.goGetPet(this.props.friend)
  }

  handleDelete() {
    // console.log(this.props.connectionId)
    this.props.deleteConnection({id: this.props.connectionId})
    // this.props.deleteConnection(this.props.connectionId)
  }



  render() {
    // console.log(this.props);

    let pet = this.props.petFriend[this.props.index];
    if (!pet) {
      return null;
    }
    
    return (
      <div>
        <li onClick={() => this.props.fetchPet(pet.data._id)}>
          {pet.data.name}
        </li>
        {/* <button onClick={this.handleDelete}>DELETE</button> */}
      </div>
    )
  }
}

export default Connections;