import { connect } from 'react-redux';
import { Posts } from '../Components/Posts';
import * as actions from '../../Store/Actions/actions';


import { initPosts } from '../../Services/FetchPosts';

export const mapStateToProps = state => {
  return {
    posts: state.postReducer.posts,
    postBody: state.postReducer.postBody,
    postId: state.postReducer.postId,
    isAddPostVisible: state.postReducer.isAddPostVisible,
    show: state.postReducer.showBackdrop
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    onDeletePost: id => dispatch(actions.deletePost(id)),
    onFetchPosts: () => dispatch(initPosts()),
    onAddPost: () => dispatch(actions.addPost()),
    onCancelPost: () => dispatch(actions.cancelPost()),
    onSubmit: () => dispatch(actions.submitPost()),
    onLoadPostDescription: selectedId =>
      dispatch(actions.loadPostDescription(selectedId)),
    onEditPost: () => dispatch(actions.editPost())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
