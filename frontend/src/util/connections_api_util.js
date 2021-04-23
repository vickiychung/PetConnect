import axios from 'axios';

export const fetchConnections = (currentPetId) => {
  return axios.get(`/api/requests/${currentPetId}`)
}

export const deleteConnection = () => {
  return axios.delete('/api/requests')
}