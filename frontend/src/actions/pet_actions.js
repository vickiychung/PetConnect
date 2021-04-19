import * as PetApiUtil from '../util/pet_api_util';

export const RECEIVE_PETS = "RECEIVE_PETS";
export const RECEIVE_USER_PETS = "RECEIVE_USER_PETS";
export const RECEIVE_PET = "RECEIVE_PET";
export const RECEIVE_PET_ERRORS = "RECEIVE_PET_ERRORS";

export const receivePets = pets => ({
  type: RECEIVE_PETS,
  pets
});

export const receiveUserPets = pets => ({
  type: RECEIVE_USER_PETS,
  pets
});

export const receivePet = pet => ({
  type: RECEIVE_PET,
  pet
});

export const receivePetErrors = errors => ({
  type: RECEIVE_PET_ERRORS,
  errors
})

export const fetchPets = () => dispatch => (
  PetApiUtil.fetchPets()
  .then(pets => dispatch(receivePets(pets)))
);

export const fetchUserPets = id => dispatch => (
  PetApiUtil.fetchUserPets(id)
  .then(pets => dispatch(receiveUserPets(pets)))
);

export const fetchPet = petId => dispatch => (
  PetApiUtil.fetchPet(petId)
  .then(pet => dispatch(receivePet(pet)))
);

export const registerPet = data => dispatch => (
  PetApiUtil.registerPet(data)
    .then(pet => dispatch(receivePet(pet)),
      err => (dispatch(receivePetErrors(err.responseJSON)))
    )
);
