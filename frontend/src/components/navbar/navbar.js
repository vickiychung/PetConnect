import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from './logo_white.png';
import TotalConnections from '../total_connections/total_connections';
import NavDropdown from './dropdown/nav_dd';


class Navbar extends React.Component {

  componentDidMount() {
    this.props.fetchAllConnections()
  }

  render() {
    return (
      <header className="navbar">
        <div className='navbar-inner'>
          <div className="feed-logo">
            <Link to="/feed">
              <img src={logo} alt="PetConnect" />
            </Link>
          </div>
          
          <TotalConnections fetchAllConnections={this.props.fetchAllConnections} connections={this.props.connections} state={this.props.state}/>
          
          <div className="nav-buttons">
            <span>
              <NavDropdown 
                logout={this.props.logout}
                userPets={this.props.userPets}
                username={this.props.username}
                deletePet={this.props.deletePet}
                currentPetId={this.props.currentPetId}
                history={this.props.history}
                fetchCurrentPet={this.props.fetchCurrentPet}
                fetchConnections={this.props.fetchConnections}
                fetchConnectionRequests={this.props.fetchConnectionRequests}
                fetchSentRequests={this.props.fetchSentRequests}
              />
            </span>
          </div>
        </div>
        

      </header>
    )
  }
}

export default Navbar;