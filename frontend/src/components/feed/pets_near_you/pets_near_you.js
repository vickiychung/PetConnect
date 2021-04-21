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

  componentWillMount() {
    this.props.fetchUsers()
  }

  componentWillReceiveProps(newState) {
    this.setState({ users: newState.users });
  }  

  render() {
    if (this.props.pets === undefined) {
      return null
    }
    console.log(this.state)
    let pets = this.props.pets


    let matchZip = (pets) => {
      let matches = [];

      for (let i = 0; i < pets.length; i++) {
        let pet = pets[i];
        if (this.props.user.zipcode === pet.shelterZip) {
          matches.push(pet.name)
        }
        // if (94063 === pet.shelterZip) {
        //   matches.push(pet.name)
        // }
      }
      return matches
    }

    let isMatch = () => {
      if (this.props.pet.shelterZip === this.props.user.zipcode) {
        return true
      }
      return false
    }
    // console.log(this.props)

    let showPet = () => {
      return (
        <li className="pets-near-index">
          <Link className="pets-near-index-redirect" to="/feed" >
            <div className="pets-near-name">
              <span>
                {this.props.pet.name}
              </span>
            </div>
            <div>

            </div>
          </Link>
          <span className="pets-near-details">
            Age: <span className="pets-near-age">{this.props.pet.age}</span>
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