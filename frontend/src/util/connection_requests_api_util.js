import axios from 'axios';

export const fetchConnectionRequest = () => {
  return axios.get('/api/requests')
}

export const createConnectionRequest = () => {
  return axios.post('/api/requests')
}

export const acceptConnectionRequest = () => {
  return axios.patch('/api/requests')
}