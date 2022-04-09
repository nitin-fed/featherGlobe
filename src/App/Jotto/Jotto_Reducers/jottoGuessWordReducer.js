import * as actionTypes from "../../Store/Actions/actionType";

export const jottoGuessWordReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GUESS_WORD:
      return [...state, action.payload];

    default:
      return state;
  }
};
