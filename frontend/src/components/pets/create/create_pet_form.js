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
      shelterZip: "",
      file: ""
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
    }

    if (!this.state.shelterZip) {
      pet.shelterZip = "00000";
    }

    if (this.state.file) {
      pet.file = this.state.file
    }
    
    console.log(pet)
    
    this.props.registerPet(pet);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  fileSelectHandler = (e) => {
    e.preventDefault();
    this.setState({
      file: e.target.files[0]
    });
    
  }

  render() {
    
    let errs;
    if (this.props.petErrors.response) {
      errs = this.props.petErrors.response.data
    }
    return (
      <div className="create-pet-form-wrapper" onClick={e => e.stopPropagation()} >
        <div className="create-pet-form-title">
          <h1 > 
            Add a Pet
          </h1>
        </div>
        <form onSubmit={this.handleSubmit} className="create-pet-form" >

          <div className="create-pet-entry">
            <input type="file" onChange={this.fileSelectHandler}/>
            
          </div>

          <div className="create-pet-entry">
            { errs ? 
              <div className="pet-create-error"> {errs.name} </div> 
              : <div className="pet-create-error"></div>
            } 
            <input 
              type="text"
              value={this.state.name}
              onChange={this.update("name")}
              placeholder="Name"
            />
          </div>

          <div className="create-pet-entry">
            { errs ? 
              <div className="pet-create-error"> {errs.species} </div> 
              : <div className="pet-create-error"></div>
            } 
            <input 
              type="text"
              value={this.state.species}
              onChange={this.update("species")}
              placeholder="Species"
            />
          </div>

          <div className="create-pet-entry">
            { errs ? 
              <div className="pet-create-error"> {errs.breed} </div> 
              : <div className="pet-create-error"></div>
            } 
            <input 
              type="text"
              value={this.state.breed}
              onChange={this.update("breed")}
              placeholder="Breed"
            />
          </div>

          <div className="create-pet-entry">
            { errs ? 
              <div className="pet-create-error"> {errs.size} </div> 
              : <div className="pet-create-error"></div>
            }
            <input 
              type="text"
              value={this.state.size}
              onChange={this.update("size")}
              placeholder="Size"
            />
          </div>

          <div className="create-pet-entry">
            { errs ? 
              <div className="pet-create-error"> {errs.age} </div> 
              : <div className="pet-create-error"></div>
            }
            <input 
              type="number"
              value={this.state.age}
              onChange={this.update("age")}
              placeholder="Age"
            />
          </div>

          <div className="create-pet-entry">
            { errs ? 
              <div className="pet-create-error"> {errs.gender} </div> 
              : <div className="pet-create-error"></div>
            }
            <input 
              type="text"
              value={this.state.gender}
              onChange={this.update("gender")}
              placeholder="Gender"
            />
          </div>

          <div className="create-pet-entry">
            <div className="pet-create-error"></div>
            <input 
              type="text"
              value={this.state.personality}
              onChange={this.update("personality")}
              placeholder="Personality (optional)"
            />
          </div>

          <div className="create-pet-entry">
            <div className="pet-create-error"></div>
            <input 
              type="text"
              value={this.state.shelter}
              onChange={this.update("shelter")}
              placeholder="Shelter (optional)"
            />
          </div>

          <div className="create-pet-entry">
            <div className="pet-create-error"></div>
            <input 
              type="number"
              value={this.state.shelterZip}
              onChange={this.update("shelterZip")}
              placeholder="Shelter Zip (optional)"
            />
          </div>

          

          <div className="submit-pet-entry">
            <input type="submit" value="Add" />
          </div>
        </form>
      </div>
    );
  };
}

export default CreatePetForm;