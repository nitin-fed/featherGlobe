/** @format */

import axios from "axios";
import * as actionTypes from "../../Store/Actions/actionType";
import { getLetterMatchCount } from "../../Demo/Support/Support";

export const guessWord = (guessWord) => {
  return (dispatch, getState) => {
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(guessWord, secretWord);

    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: { guessWord, letterMatchCount },
    });

    if (guessWord === secretWord) {
      dispatch({ type: actionTypes.CORRECT_GUESS });
    }
  };
};

export const getSecretWord = () => {
  return axios.get("http://localhost:3030").then((res) => {
    return res.data;
  });
};
