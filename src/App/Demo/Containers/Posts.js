import { Posts } from '../Components/Posts'
import { connect } from "react-redux";
import * as actions from '../../Store/Actions/actions'

export const mapStateToProps = (state) => {
    return {
        posts: state.postReducer.posts,
        postBody: state.postReducer.postBody,
        postId: state.postReducer.postId,
        isAddPostVisible: state.postReducer.isAddPostVisible
    }
}

export const mapDispatchToProps = dispatch => {
    return {
        onFetchPosts: () => dispatch(actions.initPosts()),
        onAddPost: () => dispatch(actions.addPost()),
        onCancelPost:  () => dispatch(actions.cancelPost()),
        onSubmit: () => dispatch(actions.submitPost()),
        onLoadPostDescription: (selectedId) =>  dispatch(actions.loadPostDescription(selectedId)),
        onEditPost: () => dispatch(actions.editPost())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)