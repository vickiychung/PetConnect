import React from 'react';
import { Link } from 'react-router-dom';


class PetsNearYou extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      users: []
    }
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
    return (
      console.log('hello')
    
    )
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
                {this.props.pet.name}
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