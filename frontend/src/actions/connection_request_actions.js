import * as ConnectionRequestApiUtil from '../util/connection_requests_api_util';

export const RECEIVE_CONNECTION_REQUESTS = "RECEIVE_CONNECTION_REQUESTS";
export const CREATE_CONNECTION_REQUEST = "CREATE_CONNECTION_REQUEST";
export const ACCEPT_CONNECTION_REQUEST = "ACCEPT_CONNECTION_REQUEST";
export const RECEIVE_ALL_CONNECTION_REQUESTS = "RECEIVE_ALL_CONNECTION_REQUESTS";
export const RECEIVE_SENT_REQUESTS = "RECEIVE_SENT_REQUESTS";

const receiveConnectionRequests = connectionRequests => ({
  type: RECEIVE_CONNECTION_REQUESTS,
  connectionRequests
})

const receiveConnectionRequest = connectionRequest => ({
  type: CREATE_CONNECTION_REQUEST,
  connectionRequest
});

const acceptConnection = connection => ({
  type: ACCEPT_CONNECTION_REQUEST,
  connection
})

const receiveAllConnectionRequests = connectionRequests => ({
  type: RECEIVE_ALL_CONNECTION_REQUESTS,
  connectionRequests
})

const receiveSentRequests = sentRequests => ({
  type: RECEIVE_SENT_REQUESTS,
  sentRequests
})

export const fetchConnectionRequests = friendId => dispatch => {
  return ConnectionRequestApiUtil.fetchConnectionRequests(friendId)
  .then(connectionRequest => dispatch(receiveConnectionRequests(connectionRequest)))
}

export const createConnectionRequest = data => dispatch => {
  return ConnectionRequestApiUtil.createConnectionRequest(data)
  .then(connectionRequest => dispatch(receiveConnectionRequest(connectionRequest)))
}

export const acceptConnectionRequest = (data) => dispatch => {
  return ConnectionRequestApiUtil.acceptConnectionRequest(data)
  .then(connectionResponse => dispatch(acceptConnection(connectionResponse)))
}

export const fetchAllConnectionRequests = () => dispatch => {
  return ConnectionRequestApiUtil.fetchAllConnectionRequests()
  .then(connectionRequests => dispatch(receiveAllConnectionRequests(connectionRequests)))
}

export const fetchSentRequests  = petId => dispatch => {
  return ConnectionRequestApiUtil.fetchSentRequests(petId)
  .then(sentRequests => dispatch(receiveSentRequests(sentRequests)))
}