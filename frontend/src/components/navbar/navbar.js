import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from './logo-petconnect.png';
import TotalConnections from '../total_connections/total_connections';
import NavDropdown from './dropdown/nav_dd';


class Navbar extends React.Component {


  render() {
    
    return (
      <header className="navbar">
        <div className="feed-logo">
          <Link to="/feed">
            <img src={logo} alt="PetConnect" />
          </Link>
        </div>
        
        <TotalConnections />
        
        <div className="nav-buttons">
          <span>
            {/* <button onClick={()=>this.props.logout()}>Log out</button> */}
            <NavDropdown 
              logout={this.props.logout}
              userPets={this.props.userPets}
            />
          </span>
        </div>

      </header>
    )
  }
}

export default Navbar;