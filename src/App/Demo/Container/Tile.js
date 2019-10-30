import { Users } from "../Components/Users";
import { connect } from 'react-redux'
import {initUsers, showUserDetails} from '../../Services/FetchUsers'


const mapStateToProps = (state) => {
    return {
        userData: state.usersReduder.userData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInitUsers: () => dispatch(initUsers()),
        onShowUserDetails: (id) => dispatch(showUserDetails(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)



