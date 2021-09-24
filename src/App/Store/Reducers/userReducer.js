import * as actionType from "../Actions/actionType";

const initialState = {
  userData: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_USER: {
      return {
        ...state,
        userData: action.data
      };
    }

    default:
      return {
        ...state
      };
  }
};

export default reducer;
