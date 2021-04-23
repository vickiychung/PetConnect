import React from 'react';

class Connections extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    this.props.goGetPet(this.props.friend)
    console.log(this.props.state)
  }

  handleDelete() {
    console.log(this.props.connectionId)
    this.props.deleteConnection({id: this.props.connectionId})
    // this.props.deleteConnection(this.props.connectionId)
  }

  render() {
    // console.log(this.props.connectionId)

    if (!this.props.petFriend) {
      return null
    }
    console.log('fesf')
    return (
      // <div>
      //   <li>{this.props.petFriend[this.props.index].name}</li>
      //   <button onClick={this.handleDelete}>DELETE</button>
      // </div>
      <li className="connect-item">{this.props.petFriend[this.props.index].name}
        <div className="connect-button-wrapper">
          <button className="connect-button" onClick={this.handleDelete}>DELETE</button>
        </div>
      </li>
    )
  }
}

export default Connections;