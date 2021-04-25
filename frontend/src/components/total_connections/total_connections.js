import React from 'react';
import './total_connections.css'

class TotalConnections extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      connections: this.props.connections
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.connections !== this.props.connections) {
      this.setState({connections: this.props.connections})
    }
  }

  render() {
    if (!this.state.connections.data) {
      return null
    }
  
    let rand = this.state.connections.data.length
    return (
      <div className="tc-cont">
        <div className="tc-wrapper">
          <div className="tc-text">
            <span>Total Connections:</span>
          </div>
          <div className="tc-name">
            <span> {rand} </span>
          </div>
        </div>
      </div>
    )
  }
}

export default TotalConnections;