import * as actionType from "./actionType";

const initialState = {
  counter: 10,
  Posts: [
    { id: 3, title: "Testing from reducer, my id is 3" },
    { id: 4, title: "Testing second post from reducer, my id is 4" },
    { id: 1, title: "Testing from reducer" },
    { id: 2, title: "Second post from reducer" }
  ],
  displayBlocker: false,
  displayForm: false,
  results: [],
  username: "Nitin",
  isVisible: false
};

const reducer = (state = initialState, action) => {
  console.log("2 --- ");
  switch (action.type) {
    case actionType.STORE_COUNTER:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter })
      };

    case actionType.ADD:
      return {
        ...state,
        counter: state.counter + 1
      };

    case actionType.SUBTRACT:
      return {
        ...state,
        counter: state.counter - 1
      };

    case actionType.ADD10:
      return {
        ...state,
        counter: state.counter + action.value
      };

    case actionType.SUBTRACT10:
      return {
        ...state,
        counter: state.counter - action.value
      };

    case actionType.DELETE_POST:
      const updatedPosts = state.Posts.filter(
        (post, index) => post.id !== action.value
      );
      console.log(updatedPosts, action.value);
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
        displayBlocker: true,
        isVisible: true
      };

    case actionType.DELETE_RESULT:
      const updatedResult = state.results.filter(
        item => item.id !== action.value
      );
      return {
        ...state,
        results: updatedResult
      };

    default:
      return state;
  }
};

export default reducer;
