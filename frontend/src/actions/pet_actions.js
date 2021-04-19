import axios from 'axios';

export const getPets = () => {
  return axios.Cancel.get('/api/pets')
};

export const userPets = id => {
  return axios.get(`/api/pets/user/${id}`)
}

export const getPet = id => {
  return axios.get(`/api/pets/${id}`)
}

export const registerPet = data => {
  return axios.post(`/api/pets/register`, data)
}