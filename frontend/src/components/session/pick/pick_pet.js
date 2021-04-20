import React from 'react';
import PickPetItem from './pick_pet_item'
import CreatePetFormContainer from '../../pets/create/create_pet_form_container';

class PickPet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: []
    }
  }

  componentDidMount() {
    this.props.fetchUserPets(this.props.currentUser);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.pets !== this.props.pets) {
      this.setState({pets: this.props.pets})
    }
  }


  render() {
    console.log(this.props)
    let pets = this.state.pets;
    if (typeof pets === "object") {
      pets = Object.values(this.state.pets);
    }
    return (
      <div>
        <ul>
          {
            pets.map((pet, index) => (
              <PickPetItem key={index} pet={pet} /> 
            ))
          }
        </ul>
        <CreatePetFormContainer />
      </div>
    )
  }
}


export default PickPet;


