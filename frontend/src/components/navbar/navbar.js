import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'
import logo from './logo-petconnect.png'

import TotalConnections from '../total_connections/total_connections'

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="navbar">
        <div className="feed-logo">
          <img src={logo} alt="PetConnect" />
        </div>
        
        <TotalConnections />
        
        <div className="nav-buttons">
          <span>
            Hello, User
          </span>
        </div>

      </header>
    )
  }
}

export default Navbar;