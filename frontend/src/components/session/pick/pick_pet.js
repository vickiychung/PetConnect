import React from 'react';
import PickPetItem from './pick_pet_item'
import CreatePetFormContainer from '../../pets/create/create_pet_form_container';
import CreatePetFormModal from '../../pets/create/create_pet_form_modal';
import './pick_pet.css'

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
    if (prevProps !== this.props) {
      this.setState({pets: this.props.pets})
    }
  }


  render() {
    
    let pets = this.props.pets;
    if (typeof pets === "object") {
      pets = Object.values(this.state.pets);
    } else if (pets === undefined || pets === null) {
      pets = [];
    }
    return (
      <div className="user-pet-list-wrapper">
        <ul className="user-pet-list">
          {
            pets.map((pet, index) => (
              <PickPetItem key={index} pet={pet} /> 
            ))
          }
        </ul>
        <CreatePetFormModal />
      </div>
    )
  }
}


export default PickPet;


