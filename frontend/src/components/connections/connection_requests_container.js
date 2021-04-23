import { connect } from 'react-redux';
import { goGetRequestPet, fetchPet } from '../../actions/pet_actions';
import ConnectionRequests from './connection_requests'

const mapStateToProps = state => ({
  // friend: state.entities.connectionRequests.friendData.data.name
  requestPets: state.entities.requestPets
})

const mapDispatchToProps = dispatch => ({
  goGetRequestPet: petId => dispatch(goGetRequestPet(petId)),
  fetchPet: petId => dispatch(fetchPet(petId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ConnectionRequests)