import React from 'react';

class PetsNearYou extends React.Component {
  constructor(props) {
    super(props);


  }

  // componentDidMount() {
  //   this.props.fetchPets()
  // }

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
        // if (94063 === pet.shelterZip) {
        //   matches.push(pet.name)
        // }
      }
      return matches
    }

    return (
      <div>
        <div>
          Pets Near You
        </div>
        <div>
          {matchZip(pets)}
        </div>
      </div>
    )
  }
}

export default PetsNearYou;