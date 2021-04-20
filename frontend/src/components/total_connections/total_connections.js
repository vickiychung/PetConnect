import React from 'react';
import './total_connections.css'

class TotalConnections extends React.Component {

  render() {
    let rand = Math.floor(Math.random() * 1000000);
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