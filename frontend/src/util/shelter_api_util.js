import axios from 'axios';

export const fetchShelters = () => {
  return axios.get('/api/shelters')
};

export const fetchShelter = id => {
  return axios.get(`/api/shelters/${id}`)
}