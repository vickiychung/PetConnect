import React from 'react';
import './total_connections.css'

class TotalConnections extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      connections: this.props.connections
    }
  }
  // componentDidMount() {
  //   this.props.fetchAllConnections()
  // }

  componentDidUpdate(prevProps) {
    if (prevProps.connections !== this.props.connections) {
      this.setState({connections: this.props.connections})
    }
  }

  render() {
    console.log(this.props.connections)
    // console.log(this.props.state.entities.allConnections.data)
    if (!this.state.connections.data) {
      return null
    }
    
    // console.log(this.state.connections)
    // console.log(this.props.connections)
    // let rand = Math.floor(Math.random() * 1000000);
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