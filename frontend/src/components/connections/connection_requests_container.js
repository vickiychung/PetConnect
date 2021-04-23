import { connect } from 'react-redux';
import ConnectionRequests from './connection_requests'

const mapStateToProps = state => ({
  friend: state.entities.connectionRequests.friendData.data.name
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(ConnectionRequests)