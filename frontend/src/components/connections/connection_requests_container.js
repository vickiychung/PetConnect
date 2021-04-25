import { connect } from 'react-redux';
import { goGetRequestPet, fetchPet } from '../../actions/pet_actions';
import ConnectionRequests from './connection_requests'

import {
  fetchConnectionRequests,
  acceptConnectionRequest
} from '../../actions/connection_request_actions';

const mapStateToProps = state => ({
  connectionRequests: state.entities.connectionRequests,
  requestPets: state.entities.requestPets
})

const mapDispatchToProps = dispatch => ({
  goGetRequestPet: petId => dispatch(goGetRequestPet(petId)),
  fetchPet: petId => dispatch(fetchPet(petId)),
  fetchConnectionRequests: friendId => dispatch(fetchConnectionRequests(friendId)),
  acceptConnectionRequest: data => dispatch(acceptConnectionRequest(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ConnectionRequests)