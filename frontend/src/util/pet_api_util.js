import axios from 'axios';

export const fetchPets = () => {
  return axios.get('/api/pets')
};

export const fetchUserPets = id => {
  return axios.get(`/api/pets/user/${id}`)
}

export const fetchPet = id => {
  return axios.get(`/api/pets/${id}`)
}

export const registerPet = data => {
  return axios.post(`/api/pets/register`, data)
}