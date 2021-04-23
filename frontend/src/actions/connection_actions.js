import * as ConnectionApiUtil from '../util/connections_api_util';

export const RECEIVE_CONNECTIONS = "RECEIVE_CONNECTIONS";
export const REMOVE_CONNECTION = "REMOVE_CONNECTION";

const receiveConnections = connections => ({
  type: RECEIVE_CONNECTIONS,
  connections
});

const removeConnection = connectionId => ({
  type: REMOVE_CONNECTION,
  connectionId
})

export const fetchConnections = currentPetId => dispatch => {
  return ConnectionApiUtil.fetchConnections(currentPetId)
  .then(connections => dispatch(receiveConnections(connections)))
}

export const deleteConnection = connectionId => dispatch => {
  return ConnectionApiUtil.deleteConnection(connectionId)
  .then(() => dispatch(removeConnection()))
}

