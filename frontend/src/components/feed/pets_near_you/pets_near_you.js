import React from 'react';
import { Link } from 'react-router-dom';


class PetsNearYou extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      users: []
    }

    this.handleClick = this.handleClick.bind(this);
    this.sendConnectionRequest = this.sendConnectionRequest.bind(this);
  }

  // componentDidMount() {
  //   this.props.fetchUsers()
  // }

  petsNearYou() {
    if (this.props.pets === undefined) {
      return null
    }
  }

  handleClick() {
    this.props.fetchPet(this.props.pet._id)
    // console.log(this.props.fetchPet())
    // console.log(this.props.pet._id)
  }

  sendConnectionRequest() {
    // console.log(this.props.selectedPet)
    // console.log(this.props.currentPet)
    let connection = {
      friend: this.props.pet._id,
      currentPet: this.props.currentPet
    }
    this.props.createConnectionRequest(connection)
  }

  render() {
    if (this.props.pets === undefined) {
      return null
    }
    let pets = this.props.pets


    let matchZip = (pets) => {
      let matches = [];

      for (let i = 0; i < pets.length; i++) {
        let pet = pets[i];
        if (this.props.user.zipcode === pet.shelterZip) {
          matches.push(pet.name)
        }
      }
      return matches
    }

    let isMatch = () => {
      if (this.props.pet.shelterZip === this.props.user.zipcode) {
        return true
      }
      return false
    }

    let showPet = () => {
      return (
        <li onClick={this.handleClick} className="pets-near-index">
          {/* <Link className="pets-near-index-redirect" to="/feed" > */}
            <div className="pets-near-name">
              <span>
                {this.props.pet.name} <button onClick={this.sendConnectionRequest}>CONNECT</button>
              </span>
            </div>
            <div>

            </div>
          {/* </Link> */}
          <span className="pets-near-details">
            Age: <span className="pets-near-age">{this.props.pet.age}</span>
          </span>
          <span className="pets-near-details">
            Gender: <span className="pets-near-age">{this.props.pet.gender}</span>
          </span>
          <span className="pets-near-details">
            Shelter: <span className="pets-near-age">{this.props.pet.shelter}</span>
          </span>
          <span className="pets-near-details">
            Personality: <span className="pets-near-age">{this.props.pet.personality}</span>
          </span>
        </li>
      )
    }

    return isMatch ? showPet() : null
  }
}

export default PetsNearYou;