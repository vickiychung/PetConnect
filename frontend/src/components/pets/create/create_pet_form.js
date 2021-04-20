import React from '.react';

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
      shelterZip: this.state.shelterZip
    }

    this.props.registerPet(pet);
  }

  render() {
    return (
      null
    );
  };
}

export default CreatePetForm;