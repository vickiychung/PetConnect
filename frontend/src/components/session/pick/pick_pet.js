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
      this.setState({pets: this.props.userPets})
    }
  }


  render() {
    
    let pets = this.state.pets;
    if (typeof pets === "undefined" || pets === null) {
      pets = []; 
     } else if (typeof pets === "object") {
      pets = Object.values(this.state.pets);
    }
    
    return (
      <div className="user-pet-list-wrapper">
        {/* <button onClick={this.props.logout}>Logout</button> */}
        <div className="user-pet-banner">
          <div className='pick-title-container'>
            <h1 className='pick-title'>Pick Your Pet</h1></div>
          
          <ul className="user-pet-list">
            {
              pets.map((pet, index) => (
                <PickPetItem key={index} pet={pet} fetchCurrentPet={this.props.fetchCurrentPet} /> 
              ))
            }
            {
              pets.length < 5 ? 
                <CreatePetFormModal 
                  showModal={this.props.showModal} 
                  openModal={this.props.openModal}
                  closeModal={this.props.closeModal}
                /> : null
            }
          </ul>
        </div>
        
        
      </div>
    )
  }
}


export default PickPet;


