import * as ConnectionRequestApiUtil from '../util/connection_requests_api_util';

export const RECEIVE_CONNECTION_REQUESTS = "RECEIVE_CONNECTION_REQUESTS";
export const CREATE_CONNECTION_REQUEST = "CREATE_CONNECTION_REQUEST";
export const ACCEPT_CONNECTION_REQUEST = "ACCEPT_CONNECTION_REQUEST";

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
