import axios from 'axios';

export const getPet = (id) => {
  return axios.get(`/api/pets/${id}`)
}

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

export const editPet = data => {
  return axios.patch(`/api/pets/${data.id}`, data)
}

export const deletePet = petId => {
  return axios.delete(`/api/pets/${petId}`)
} 