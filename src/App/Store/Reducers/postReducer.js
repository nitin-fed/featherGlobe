import {} from "../../Demo/Action/demoActions";
import * as actionType from "../Actions/actionType";

export const initialState = {
  posts: [],
  postBody: 'string',
  postId: 0,
  isAddPostVisible: false,
  isEditing: false
};

export function postReducer(state = initialState, action) {
  
  switch (action.type) {
    case "ADD": {
      return {
        ...state
      };
    }
    case actionType.LOAD_POST_DESCRIPTION: {
     
     //console.log(action.id)
      return {
        ...state,
        postBody: state.posts[action.id-1].body,
        postId: state.posts[action.id-1].id
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
        isAddPostVisible: true,
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
    
    default: {
      return state;
    }
  }
}
