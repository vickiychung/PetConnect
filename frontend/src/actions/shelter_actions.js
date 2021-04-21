import * as ShelterApiUtil from '../util/shelter_api_util';

export const RECEIVE_SHELTERS = "RECEIVE_SHELTERS";
export const RECEIVE_SHELTER = "RECEIVE_SHELTER";

const receiveShelters = shelters => ({
  type: RECEIVE_SHELTERS,
  shelters
}); 

const receiveShelter = shelter => ({
  type: RECEIVE_SHELTER,
  shelter
});



export const fetchShelters = () => dispatch => (
  ShelterApiUtil.fetchShelters()
  .then(shelters => dispatch(receiveShelters(shelters)))
);

export const fetchShelter = shelterId => dispatch => (
  ShelterApiUtil.fetchShelter(shelterId)
  .then(shelter => dispatch(receiveShelter(shelter)))
);