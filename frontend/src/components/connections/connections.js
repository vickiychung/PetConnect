import React from 'react';

class Connections extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete() {
    this.props.deleteConnection(this.props.connectionId)
  }

  render() {
    console.log(this.props.connectionId)
    return (
      <div>
        <li>{this.props.connection}</li>
        <button onClick={this.handleDelete}>DELETE</button>
      </div>
    )
  }
}

export default Connections;