import { connect } from 'react-redux';
import { fetchPet } from '../../actions/pet_actions';
import ConnectionRequests from './connection_requests'

import {
  fetchConnectionRequests,
  acceptConnectionRequest
} from '../../actions/connection_request_actions';

const mapStateToProps = state => ({
  connectionRequests: state.entities.connectionRequests,
  sentRequests: state.entities.sentRequests
})

const mapDispatchToProps = dispatch => ({
  fetchPet: petId => dispatch(fetchPet(petId)),
  fetchConnectionRequests: friendId => dispatch(fetchConnectionRequests(friendId)),
  acceptConnectionRequest: data => dispatch(acceptConnectionRequest(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ConnectionRequests)