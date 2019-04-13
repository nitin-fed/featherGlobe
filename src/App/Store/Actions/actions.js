import axios from "axios";
import * as actionType from "./actionType";

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


export const loadPostDescription = (selectedPostId) => {
  console.log(selectedPostId)
  return {
    type: actionType.LOAD_POST_DESCRIPTION,
    id: selectedPostId
  }
}

export const addPost = () => {
  return {
    type: actionType.ADD_POST
  }
}

export const editPost = () => {
  return{
    type: actionType.EDIT_POST
  }
}

export const cancelPost = () => {
  return {
    type: actionType.CANCEL_POST
  }
}

export const submitPost = () => {
  return {
    type: actionType.SUBMIT_POST
  }
}


export const initPosts = () => {
  
 // console.log('counter')
  return dispatch => {
    const url = `http://jsonplaceholder.typicode.com/posts`;
    //const url = 'http://react-practice-2bc39.firebaseio.com/Posts'
    axios
      .get(url)
      .then(response => {
        dispatch(fetchPosts(response.data));
      })
      .catch(error => {
        //dispatch(fetchPosts(postData));
        dispatch(fetchPostsFails(error));
      });
  };
};



