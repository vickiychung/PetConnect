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
      <li className="connect-item">{this.props.connection}
        <div className="connect-button-wrapper">
          <button className="connect-button" onClick={this.handleDelete}>DELETE</button>
        </div>
      </li>
    )
  }
}

export default Connections;