import * as ConnectionApiUtil from '../util/connections_api_util';

export const RECEIVE_CONNECTIONS = "RECEIVE_CONNECTIONS";
export const REMOVE_CONNECTION = "REMOVE_CONNECTION";
export const RECEIVE_ALL_CONNECTIONS = "RECEIVE_ALL_CONNECTIONS";


const receiveConnections = connections => ({
  type: RECEIVE_CONNECTIONS,
  connections
});

const removeConnection = connection => ({
  type: REMOVE_CONNECTION,
  connection
})

const receiveAllConnections = connections => ({
  type: RECEIVE_ALL_CONNECTIONS,
  connections
})

export const fetchConnections = currentPetId => dispatch => {
  return ConnectionApiUtil.fetchConnections(currentPetId)
  .then(connections => dispatch(receiveConnections(connections)))
}

export const deleteConnection = connectionId => dispatch => {
  return ConnectionApiUtil.deleteConnection(connectionId)
  .then((connection) => dispatch(removeConnection(connection)))
}

export const fetchAllConnections = () => dispatch => {
  return ConnectionApiUtil.fetchAllConnections()
  .then(connections => dispatch(receiveAllConnections(connections)))
}

