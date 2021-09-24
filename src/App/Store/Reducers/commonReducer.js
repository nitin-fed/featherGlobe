import * as actionType from "../Actions/actionType";

const initialState = {
  displayLoader: false
};

const reducer = (state = initialState, action) => {
  console.log(action.type, action.payload);
  switch (action.type) {
    case actionType.LOADER:
      return {
        ...state,
        displayLoader: action.payload
      };

    default:
      return { ...state };
  }
};

export default reducer;
