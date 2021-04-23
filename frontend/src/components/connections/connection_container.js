import { connect } from 'react-redux';
import Connections from './connections'

const mapStateToProps = state => ({
  petFriend: state.entities.friendPets
  // state
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Connections);
