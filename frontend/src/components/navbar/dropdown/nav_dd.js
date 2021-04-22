import React from 'react';
import './nav_dd.css';
import '../../app.css';

import {Link} from 'react-router-dom';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

class NavDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
    this.wrapperRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }
  
  handleClickOutside(e) {
    if (this.wrapperRef && !this.wrapperRef.current.contains(e.target)) {
      this.setState({
        open: false,
      });
    }
  }

  toggle() {
    this.setState({open: !this.state.open})
  };

  render() {
    
    return (
      <div className="dd-wrapper" ref={this.wrapperRef}>
        <div 
          tabIndex={0} 
          className="dd-header" 
          role="button" 
          onKeyPress={() => this.toggle()} 
          onClick={() => this.toggle()} > 
  
          <div className="dd-button"> 
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>
        { this.state.open && (
          <ul className="dd-list">
            <p>Hi, {this.props.username} :)</p>
            
            <Link className="dd-my-pet" to="/pick_pet">My Pets</Link>

            {
              this.props.userPets.map(pet => (
                <li key={pet._id} >
                  <div className="dd-pet-name-container">
                    <div className="dd-pet-name">
                      <Link to={`/feed/${pet._id}`}>{pet.name}</Link>
                    </div>
                  </div>
                </li>
              ))
            }

            <div 
              onClick={()=>this.props.logout()}
              className="dd-logout"
            >
              <span>
                Log out
              </span>
            </div>
          </ul>
        )}
      </div>
    )
  }
}

export default NavDropdown;