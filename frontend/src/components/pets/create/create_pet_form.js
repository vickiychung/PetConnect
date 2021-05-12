import React from 'react';
import './create_pet_form.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

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
      file: "",
      tempURL: null
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append("name", this.state.name);
    formData.append("species", this.state.species);
    formData.append("breed", this.state.breed);
    formData.append("size", this.state.size);
    formData.append("age", this.state.age);
    formData.append("personality", this.state.personality);
    formData.append("gender", this.state.gender);
    formData.append("shelter", this.state.shelter);
    formData.append("shelterZip", this.state.shelterZip);

    if (!this.state.shelterZip) {
      formData.set("shelterZip", "00000");
    }

    if (this.state.file) {
      formData.append("file", this.state.file);
    }

    this.props.registerPet(formData);
   
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  fileSelectHandler = (e) => {
    e.preventDefault();
    this.setState({
      file: e.target.files[0],
      tempURL: URL.createObjectURL(e.target.files[0])
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

          <div className="create-pet-details-cont">
            <div className="create-pet-image-prev">
              <div className="pet-image">
                <label htmlFor="upload-button">
                  <div className="edit-image-preview-container">
                    {
                      this.state.tempURL ? 
                        <img className="edit-preview-image" src={this.state.tempURL} /> :
                        <FontAwesomeIcon icon={faPaw} />
                    }
                  </div>
                </label>
                <input 
                  type="file" 
                  id="upload-button"
                  style={{ display: "none" }}
                  onChange={this.fileSelectHandler}
                />
                <span>
                  Upload Photo (optional)
                </span>
              </div>
            </div>

            <div className="create-pet-details">

              <div className="create-pet-details-sub">
                <div className="create-pet-entry">
                  <div className="pet-create-error-cont">
                    { errs ? 
                      <div className="pet-create-error"> {errs.name} </div> 
                      : <div className="pet-create-error"></div>
                    } 

                  </div>
                  <input 
                    type="text"
                    value={this.state.name}
                    onChange={this.update("name")}
                    placeholder="Name"
                  />
                </div>

                <div className="create-pet-entry">
                  <div className="pet-create-error-cont">
                    { errs ? 
                      <div className="pet-create-error"> {errs.species} </div> 
                      : <div className="pet-create-error"></div>
                    } 
                  </div>
                  <input 
                    type="text"
                    value={this.state.species}
                    onChange={this.update("species")}
                    placeholder="Species"
                  />
                </div>
              </div>

              <div className="create-pet-details-sub">
                <div className="create-pet-entry">
                  <div className="pet-create-error-cont">
                    { errs ? 
                      <div className="pet-create-error"> {errs.breed} </div> 
                      : <div className="pet-create-error"></div>
                    } 
                  </div>
                  <input 
                    type="text"
                    value={this.state.breed}
                    onChange={this.update("breed")}
                    placeholder="Breed"
                  />
                </div>

                <div className="create-pet-entry">
                  <div className="pet-create-error-cont">
                    { errs ? 
                      <div className="pet-create-error"> {errs.size} </div> 
                      : <div className="pet-create-error"></div>
                    }
                  </div>
                  <input 
                    type="text"
                    value={this.state.size}
                    onChange={this.update("size")}
                    placeholder="Size"
                  />
                </div>
              </div>

              <div className="create-pet-details-sub">
                <div className="age-gender">
                  <div className="create-pet-entry create-pet-age">
                    <div className="pet-create-error-cont">
                      { errs ? 
                        <div className="pet-create-error"> {errs.age} </div> 
                        : <div className="pet-create-error"></div>
                      }
                    </div>
                    <input 
                      type="number"
                      value={this.state.age}
                      onChange={this.update("age")}
                      placeholder="Age"
                    />
                  </div>

                  <div className="create-pet-entry create-pet-gender">
                    <div className="pet-create-error-cont">
                      { errs ? 
                        <div className="pet-create-error"> {errs.gender} </div> 
                        : <div className="pet-create-error"></div>
                      }
                    </div>
                    <input 
                      type="text"
                      value={this.state.gender}
                      onChange={this.update("gender")}
                      placeholder="Gender"
                    />
                  </div>
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
              </div>

              <div className="create-pet-details-sub">
                <div className="create-pet-shelter">
                  <div className="pet-create-error"></div>
                  <input 
                    type="text"
                    value={this.state.shelter}
                    onChange={this.update("shelter")}
                    placeholder="Shelter (optional)"
                  />
                </div>

                <div className="create-pet-shelterzip">
                  <div className="pet-create-error"></div>
                  <input 
                    type="number"
                    value={this.state.shelterZip}
                    onChange={this.update("shelterZip")}
                    placeholder="Shelter Zip (optional)"
                  />
                </div>                
              </div>

              </div>
            </div>

          <div className="submit-pet-entry">
            <button>Add Pet</button>
          </div>
        </form>
      </div>
    );
  };
}

export default CreatePetForm;