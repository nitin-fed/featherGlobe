import Users  from './Users';
import { connect } from 'react-redux';
import { initUsers, showUserDetails } from '../../../Services/FetchUsers';
import { backdropClicked } from '../../../Store/Actions/users';


const mapStateToProps = state => {
  return {
    userData: state.usersReduder.userData,
    selectedUser: state.usersReduder.selectedUser,
    showBackDrop: state.usersReduder.showBackDrop
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInitUsers: () => dispatch(initUsers()),
    onShowUserDetails: id => dispatch(showUserDetails(id)),
    onBackdropClicked: () => dispatch(backdropClicked())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
