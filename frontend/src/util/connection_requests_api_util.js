import axios from 'axios';

export const fetchConnectionRequests = (friendId) => {
  return axios.get(`/api/requests/${friendId}`)
}

export const fetchSentRequests = (petId) => {
  return axios.get(`/api/requests/sent/${petId}`)
}

export const createConnectionRequest = (data) => {
  return axios.post('/api/requests', data)
}

export const acceptConnectionRequest = (data) => {
  return axios.patch('/api/requests', data)
}

export const fetchAllConnectionRequests = () => {
  return axios.get('/api/requests')
}