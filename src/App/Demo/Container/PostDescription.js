import { connect } from "react-redux";
import * as actions from '../../Store/Actions/actions'
import { PostDescription } from "../Components/PostDescription";

export const mapStateToProps = (state) => {
    return{
        selectedPost: state.postReducer.selectedPost
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        onBackdropClicked: () => dispatch(actions.backdropClicked())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDescription)