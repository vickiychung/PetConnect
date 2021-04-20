import React from 'react';
import './create_pet_form.css'

class CreatePetForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      species: "",
      breed: "",
      size: "",
      age: "",
      personality: "",
      gender: "",
      shelter: "",
      shelterZip: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let pet = {
      name: this.state.name,
      species: this.state.species,
      breed: this.state.breed,
      size: this.state.size,
      age: this.state.age,
      personality: this.state.personality,
      gender: this.state.gender,
      shelter: this.state.shelter,
      shelterZip: this.state.shelterZip,
      // user: this.props.currentUser  
    }

    this.props.registerPet(pet);
    this.setState({
      name: "",
      species: "",
      breed: "",
      size: "",
      age: "",
      personality: "",
      gender: "",
      shelter: "",
      shelterZip: ""
    })
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="create-pet-form">
          <input 
            type="text"
            value={this.state.name}
            onChange={this.update("name")}
            placeholder="Name"
          />
          <input 
            type="text"
            value={this.state.species}
            onChange={this.update("species")}
            placeholder="Species"
          />
          <input 
            type="text"
            value={this.state.breed}
            onChange={this.update("breed")}
            placeholder="Breed"
          />
          <input 
            type="text"
            value={this.state.size}
            onChange={this.update("size")}
            placeholder="Size"
          />
          <input 
            type="number"
            value={this.state.age}
            onChange={this.update("age")}
            placeholder="Age"
          />
          <input 
            type="text"
            value={this.state.personality}
            onChange={this.update("personality")}
            placeholder="Personality"
          />
          <input 
            type="text"
            value={this.state.gender}
            onChange={this.update("gender")}
            placeholder="Gender"
          />
          <input 
            type="text"
            value={this.state.shelter}
            onChange={this.update("shelter")}
            placeholder="Shelter"
          />
          <input 
            type="number"
            value={this.state.shelterZip}
            onChange={this.update("shelterZip")}
            placeholder="Shelter Zip"
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  };
}

export default CreatePetForm;