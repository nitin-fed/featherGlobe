import * as actionType from '../Actions/actionType'

const initialState = {
  guessWord: '',
  guessedWords: [],
  correctWord: 'party',
  isGuessCorrect: false,
  matchCharArr: []
};

export const guessedWordsReducer = (state = initialState, action) => {


  switch (action.type) {

    case actionType.CHECK_WORD:

      if (state.guessWord.toLowerCase() != state.correctWord.toLowerCase()) {
        const updatedGuessedWords = [...state.guessedWords]
        const letterMatch = checkMatchedLetters(state.guessWord, state.correctWord) 
        if (state.guessWord != '') {
          updatedGuessedWords.push({ word: state.guessWord, lettermatch: letterMatch.length })

          return {
            ...state,
            guessedWords: updatedGuessedWords,
            guessWord: '',
            letterMatch: letterMatch
          };
        }
      } else {
        return {
          ...state,
          isGuessCorrect: true
        }
      }

    case actionType.UPDATE_GUESSWORD:

      return {
        ...state,
        guessWord: action.payload
      }

    default:
      return state
  }
}

export function checkMatchedLetters(guessedWord, correctWord) {
  const correctWordArr = correctWord.split('')
  const guessWordArr = guessedWord.split('');
  let matchCharArr = [];
  let count = 0;

  for (let i = 0; i < correctWordArr.length; i++) {
    for (let j = 0; j < guessWordArr.length; j++) {
      if (correctWordArr[i].toLowerCase() == guessWordArr[j].toLowerCase()) {
        matchCharArr.push(correctWordArr[i]);
        //count++
      }
    }
  }
  return matchCharArr
}