import { connect } from 'react-redux';
import { fetchPet } from '../../actions/pet_actions';
import PendingRequests from './pending_requests';

import {
  acceptConnectionRequest,
  fetchSentRequests
} from '../../actions/connection_request_actions';

const mapStateToProps = state => ({
  sentRequests: state.entities.sentRequests
})

const mapDispatchToProps = dispatch => ({
  fetchPet: petId => dispatch(fetchPet(petId)),
  fetchSentRequests: petId => dispatch(fetchSentRequests(petId)),
  acceptConnectionRequest: data => dispatch(acceptConnectionRequest(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PendingRequests)