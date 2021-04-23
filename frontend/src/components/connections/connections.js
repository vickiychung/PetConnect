import React from 'react';

class Connections extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this)
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
      <li className="connect-item">
        {pet.data.name}
        
        <div className="connect-button-wrapper">
          <button onClick={this.handleDelete}>DELETE</button>
        </div>
      </li>
    )
  }
}

export default Connections;