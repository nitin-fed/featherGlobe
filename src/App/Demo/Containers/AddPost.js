import { AddPost } from '../Components/AddPost';
import { connect } from 'react-redux';

export const mapStateToProps = state => {
  return {
    posts: state.postReducer.posts,
    postId: state.postReducer.postId,
    isEditing: state.postReducer.isEditing
  };
};

export default connect(mapStateToProps)(AddPost);
