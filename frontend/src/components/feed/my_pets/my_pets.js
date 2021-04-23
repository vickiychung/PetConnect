import React from 'react';
import './my_pets.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

class MyPets extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.currentPet.name,
      species: this.props.currentPet.species,
      breed: this.props.currentPet.breed,
      size: this.props.currentPet.size,
      age: this.props.currentPet.age,
      personality: this.props.currentPet.personality,
      gender: this.props.currentPet.gender,
      shelter: this.props.currentPet.shelter,
      shelterZip: this.props.currentPet.shelterZip,
      file: this.props.currentPet.photoUrl
    }

    this.speciesInput = React.createRef();
    this.breedInput = React.createRef();
    this.sizeInput = React.createRef();
    this.ageInput = React.createRef();
    this.personalityInput = React.createRef();
    this.genderInput = React.createRef();
    this.shelterInput = React.createRef();
    
    this.handleSpeciesChange = this.handleSpeciesChange.bind(this);
    this.handleSpeciesUpdate = this.handleSpeciesUpdate.bind(this);

    this.handleBreedChange = this.handleBreedChange.bind(this);
    this.handleBreedUpdate = this.handleBreedUpdate.bind(this);

    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.handleSizeUpdate = this.handleSizeUpdate.bind(this);

    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.handleGenderUpdate = this.handleGenderUpdate.bind(this);

    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleAgeUpdate = this.handleAgeUpdate.bind(this);

    this.handlePersonalityChange = this.handlePersonalityChange.bind(this);
    this.handlePersonalityUpdate = this.handlePersonalityUpdate.bind(this);

    this.handleShelterChange = this.handleShelterChange.bind(this);
    this.handleShelterUpdate = this.handleShelterUpdate.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentPet !== this.props.currentPet) {
      this.setState({
        name: this.props.currentPet.name,
        species: this.props.currentPet.species,
        breed: this.props.currentPet.breed,
        size: this.props.currentPet.size,
        age: this.props.currentPet.age,
        personality: this.props.currentPet.personality,
        gender: this.props.currentPet.gender,
        shelter: this.props.currentPet.shelter,
        shelterZip: this.props.currentPet.shelterZip,
        file: this.props.currentPet.photoUrl
      })
    }
  } 

  handleSpeciesChange(e) {
    const editedSpecies = e.target.value.replace(/[\t]+/g, '');
    this.setState({ species: editedSpecies });
  }

  handleSpeciesUpdate() {
    this.props.updatePet({id: this.props.currentPet._id, species: this.state.species})
  }

  handleBreedChange(e) {
    const editedBreed = e.target.value.replace(/[\t]+/g, '');
    this.setState({ breed: editedBreed });
  }

  handleBreedUpdate() {
    this.props.updatePet({id: this.props.currentPet._id, breed: this.state.breed})
  }

  handleSizeChange(e) {
    const editedSize = e.target.value.replace(/[\t]+/g, '');
    this.setState({ size: editedSize });
  }

  handleSizeUpdate() {
    this.props.updatePet({id: this.props.currentPet._id, size: this.state.size})
  }

  handleGenderChange(e) {
    const editedGender = e.target.value.replace(/[\t]+/g, '');
    this.setState({ gender: editedGender });
  }

  handleGenderUpdate() {
    this.props.updatePet({id: this.props.currentPet._id, gender: this.state.gender})
  }
  
  handleAgeChange(e) {
    const editedAge = e.target.value;
    this.setState({ age: editedAge });
  }

  handleAgeUpdate() {
    if (this.state.age !== this.props.currentPet.age) {
      this.props.updatePet({id: this.props.currentPet._id, age: this.state.age})
    }
  }

  handlePersonalityChange(e) {
    const editedPersonality = e.target.value.replace(/[\t]+/g, '');
    this.setState({ personality: editedPersonality });
  }

  handlePersonalityUpdate() {
    this.props.updatePet({id: this.props.currentPet._id, personality: this.state.personality})
  }

  handleShelterChange(e) {
    const editedShelter = e.target.value.replace(/[\t]+/g, '');
    this.setState({ shelter: editedShelter });
  }

  handleShelterUpdate() {
    this.props.updatePet({id: this.props.currentPet._id, shelter: this.state.shelter})
  }
  
  fileSelectHandler = (e) => {
    // e.preventDefault();
    
    this.setState({
      file: e.target.files[0]
    });

  
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();

    formData.set("id", this.props.currentPet._id);
    if (this.state.file) {
      formData.append("file", this.state.file);
    }
    
    this.props.updatePet(formData)
  }
 
  render() {

    // console.log(this.props)

    const currentPet = this.props.currentPet;
    let profilePhoto;

    if (!currentPet) return null;

    if (currentPet.photoUrl) {
      profilePhoto = <img 
        className="profile-pic" 
        src={currentPet.photoUrl} 
        alt="profile-photo" 
      /> 
    } else {
      profilePhoto = <div className="profile-pic-default">
        <FontAwesomeIcon icon={faPaw} />
        {/* <label htmlFor="upload-button">
          <FontAwesomeIcon icon={faPaw} />
        </label>
          <input 
            type="file" 
            id="upload-button" 
            style={{ display: "none" }} 
            onChange={this.fileSelectHandler}
          /> */}
        </div>
    }
    

    return (
      <div className="my-pets-wrapper">
        <div className="profile-pic-wrapper">
          {profilePhoto}
          
        </div>
        {/* <form onSubmit={this.handleSubmit}>
          <input 
            type="file" 
            id="upload-button" 
            onChange={this.fileSelectHandler}
          />
          <div className="submit-pet-entry">
            <input type="submit" value="Add" />
          </div>
        </form> */}

        <div className="pet-details">
          <p className="my-pet-name">
            {currentPet.name}
          </p>

  
          <ul className="my-pet-details-list">
            <li>
              <label>species: </label>
              <input
                type="text"
                className={`my-pet-details`}
                onChange={this.handleSpeciesChange}
                onBlur={this.handleSpeciesUpdate}
                ref={this.speciesInput}
                value={this.state.species}
                placeholder="Species can't be blank"
                autoComplete="off" 
                autoCorrect="off" 
                autoCapitalize="off"
                spellCheck="false"
              />
            </li>

             <li>
              <label>breed: </label>
              <input
                type="text"
                className={`my-pet-details`}
                onChange={this.handleBreedChange}
                onBlur={this.handleBreedUpdate}
                ref={this.breedInput}
                value={this.state.breed}
                placeholder="Breed can't be blank"
                autoComplete="off" 
                autoCorrect="off" 
                autoCapitalize="off"
                spellCheck="false"
              />
            </li>

             <li>
              <label>size: </label>
              <input
                type="text"
                className={`my-pet-details`}
                onChange={this.handleSizeChange}
                onBlur={this.handleSizeUpdate}
                ref={this.sizeInput}
                value={this.state.size}
                placeholder="Size can't be blank"
                autoComplete="off" 
                autoCorrect="off" 
                autoCapitalize="off"
                spellCheck="false"
              />
            </li>

             <li>
              <label>gender: </label>
              <input
                type="text"
                className={`my-pet-details`}
                onChange={this.handleGenderChange}
                onBlur={this.handleGenderUpdate}
                ref={this.genderInput}
                value={this.state.gender}
                placeholder="Gender can't be blank"
                autoComplete="off" 
                autoCorrect="off" 
                autoCapitalize="off"
                spellCheck="false"
              />
            </li>

             <li>
              <label>age: </label>
              <input
                type="number"
                className={`my-pet-details`}
                onChange={this.handleAgeChange}
                onBlur={this.handleAgeUpdate}
                ref={this.ageInput}
                value={this.state.age}
                placeholder="Age can't be blank"
                autoComplete="off" 
                autoCorrect="off" 
                autoCapitalize="off"
                spellCheck="false"
              />
            </li>

             <li>
              <label>personality: </label>
              <input
                type="text"
                className={`my-pet-details`}
                onChange={this.handlePersonalityChange}
                onBlur={this.handlePersonalityUpdate}
                ref={this.personalityInput}
                value={this.state.personality}
                autoComplete="off" 
                autoCorrect="off" 
                autoCapitalize="off"
                spellCheck="false"
              />
            </li>

             <li>
              <label>shelter: </label>
              <input
                type="text"
                className={`my-pet-details`}
                onChange={this.handleShelterChange}
                onBlur={this.handleShelterUpdate}
                ref={this.shelterInput}
                value={this.state.shelter}
                autoComplete="off" 
                autoCorrect="off" 
                autoCapitalize="off"
                spellCheck="false"
              />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MyPets;
