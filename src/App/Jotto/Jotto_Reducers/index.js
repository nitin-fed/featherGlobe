import * as actionTypes from "../../Store/Actions/actionType";

export const secretWordReducer = (state = false, action) => {
  switch (action.type) {
    case actionTypes.CORRECT_GUESS:
      return true;

    default:
      return state;
  }
};
