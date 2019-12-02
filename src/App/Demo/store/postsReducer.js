import * as actionType from './actionType';

const initialState = {
  //counter: 10,
  Posts: [],
  displayBlocker: false,
  displayForm: false,
  // results: [],
  username: 'Nitin'
};

const reducer = (state = initialState, action) => {
  // console.log(action.value);
  switch (action.type) {
    case actionType.DELETE_POST:
      const updatedPosts = state.Posts.filter(
        (post, index) => post.id !== action.value
      );
      // console.log(updatedPosts, action.value);
      return {
        ...state,
        Posts: updatedPosts
      };

    case actionType.CANCEL_ADDPOST:
      return {
        ...state,
        displayBlocker: !state.displayBlocker
      };

    case actionType.ADD_POST:
      return {
        ...state,
        displayBlocker: true
      };

    case actionType.EDIT_POST:
      console.log('Edit post ' + state.selectedPostId);
      return {
        ...state
      };

    default:
      return state;
  }
};

export default reducer;
