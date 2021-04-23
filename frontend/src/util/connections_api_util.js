import axios from 'axios';

export const fetchConnections = (currentPetId) => {
  return axios.get(`/api/connections/${currentPetId}`)
}

export const fetchAllConnections = () => {
  return axios.get('/api/connections')
}

export const deleteConnection = (id) => {
  return axios.delete('/api/connections', id)
}