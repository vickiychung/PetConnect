import * as PetApiUtil from '../util/pet_api_util';

export const RECEIVE_PETS = "RECEIVE_PETS";
export const RECEIVE_USER_PETS = "RECEIVE_USER_PETS";
export const RECEIVE_PET = "RECEIVE_PET";
export const RECEIVE_PET_ERRORS = "RECEIVE_PET_ERRORS";
export const RECEIVE_CURRENT_PET = "RECEIVE_CURRENT_PET";
export const RECEIVE_SELECTED_PET = "RECEIVE_SELECTED_PET";
export const REMOVE_PET = "REMOVE_PET";
export const EDIT_PET = "EDIT_PET";
export const GET_PET = "GET_PET";

export const receivePets = pets => ({
  type: RECEIVE_PETS,
  pets
});


export const receiveUserPets = userPets => ({
  type: RECEIVE_USER_PETS,
  userPets
});

export const receivePet = pet => ({
  type: RECEIVE_PET,
  pet
});

const getPet = pet => ({
  type: GET_PET,
  pet
})

export const receivePetErrors = errors => ({
  type: RECEIVE_PET_ERRORS,
  errors
})

const receiveCurrentPet = pet => ({
  type: RECEIVE_CURRENT_PET,
  pet
});

const receiveSelectedpet = pet => ({
  type: RECEIVE_SELECTED_PET,
  pet
})

const removePet = petId => ({
  type: REMOVE_PET,
  petId
})

const editPet = pet => ({
  type: EDIT_PET,
  pet
})

export const goGetPet = petId => dispatch => (
  PetApiUtil.getPet(petId)
  .then(pet => dispatch(getPet(pet)))
)

export const fetchPets = () => dispatch => (
  PetApiUtil.fetchPets()
  .then(pets => dispatch(receivePets(pets)))
);

export const fetchUserPets = id => dispatch => (
  PetApiUtil.fetchUserPets(id)
  .then(userPets => dispatch(receiveUserPets(userPets)))
);

export const fetchPet = petId => dispatch => (
  PetApiUtil.fetchPet(petId)
  .then(pet => dispatch(receiveSelectedpet(pet)))
);

export const registerPet = data => dispatch => (
  PetApiUtil.registerPet(data)
    .then(pet => dispatch(receivePet(pet)))
    .catch(err => dispatch(receivePetErrors(err)))
);

export const fetchCurrentPet = petId => dispatch => (
  PetApiUtil.fetchPet(petId).then(pet => dispatch(receiveCurrentPet(pet)))
);

export const deletePet = petId => dispatch => (
  PetApiUtil.deletePet(petId).then(() => dispatch(removePet(petId)))
);

export const updatePet = pet => dispatch => (
  PetApiUtil.editPet(pet)
    .then(pet => dispatch(editPet(pet)))
    .catch(err => dispatch(receivePetErrors(err)))
);