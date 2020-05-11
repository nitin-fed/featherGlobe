import * as actionType from './actionType';

export const fetchPosts = posts => {
  return {
    type: actionType.FETCH_POSTS,
    posts: posts
  };
};

export const fetchPostsFails = error => {
  return {
    type: actionType.FETCH_POSTS_FAILS
  };
};

export const loadLargeImage = e => {
  return {
    type: actionType.LOAD_LARGE_IMAGE,
    payload: { currentId: e.target.id }
  };
};

export const deletePost = id => {
  return {
    type: actionType.DELETE_POST,
    payload: { id: id }
  };
};

export const previousClicked = () => {
  return {
    type: actionType.PREVIOUS_CLICKED
  };
};

export const nextClicked = () => {
  return {
    type: actionType.NEXT_CLICKED
  };
};

export const backdropClicked = () => {
  debugger;
  return {
    type: actionType.BACKDROP_CLICKED
  };
};

export const loadPostDescription = selectedPostId => {
  return {
    type: actionType.LOAD_POST_DESCRIPTION,
    id: selectedPostId
  };
};

export const addPost = () => {
  return {
    type: actionType.ADD_POST
  };
};

export const editPost = () => {
  return {
    type: actionType.EDIT_POST
  };
};

export const cancelPost = () => {
  return {
    type: actionType.CANCEL_POST
  };
};

export const submitPost = () => {
  return {
    type: actionType.SUBMIT_POST
  };
};

export const buttonGroupClick = () => {
  return {
    type: actionType.CAL_BUTTON_GROUP
  }
}

/* GUESSED WORDS ACTIONS */

export const addGuessedWord =() => { 
  return{
    type: actionType.CHECK_WORD
  }
}

export const updateGuessWord  = (evt) => {
    return {
      type: actionType.UPDATE_GUESSWORD,
      payload: evt.target.value
    }

  
}

