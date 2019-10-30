
import * as actionType from "../Actions/actionType";

export const initialState = {
  posts: [],
  postId: 0,
  isAddPostVisible: false,
  isEditing: false,
  showBackdrop: false, 
  selectedPost: { }
};

export function postReducer(state = initialState, action) {
  
  switch (action.type) {
    case "ADD": {
      return {
        ...state
      };
    }

    case actionType.DELETE_POST :{
      return {
        ...state,
        posts: state.posts.filter( (post) => post.id !== action.payload.id)
        
      }
    }
    case actionType.LOAD_POST_DESCRIPTION: {

      const selectedPost = state.posts.filter( (post) => post.id === action.id)[0]
      return {
        ...state,
        showBackdrop: true,
        postId: action.id,
        selectedPost: selectedPost
      };
    }
    case actionType.FETCH_POSTS_FAILS: {      
      alert('error')
      return {
        ...state,
        posts: action.posts
      };
    }

    case actionType.FETCH_POSTS: {      
      return {
        ...state,
        posts: action.posts
      };
    }

    case actionType.ADD_POST: {     
     
      return {
        ...state,
        showBackdrop: true,
        isEditing: false
      };
    }
    case actionType.EDIT_POST: {
      return {
        ...state,
        isAddPostVisible: true,
        isEditing: true
      };
    }

    case actionType.CANCEL_POST: {      
      return {
        ...state,
        isAddPostVisible: false
      };
    }

 case actionType.SUBMIT_POST: {      
      return {
        ...state,
        isAddPostVisible: false
      };
    }

    case actionType.BACKDROP_CLICKED:
      return {
        ...state,
        showBackdrop: false
      }
    
    default: {
      return state;
    }
  }
}
