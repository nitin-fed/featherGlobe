import * as actionType from '../Actions/actionType'

const initialState = {
    guessedWords: [{word: 'string', lettermatch: 0}]
  };
  
export const guessedWordsReducer = (state = initialState, action) => {
    switch (action.type) {
      case actionType.CHECK_WORD:
        return {
          ...state,
          guessedWords: state.guessedWords.push({word: action.payload, lettermatch: checkMatchedLetters(action.payload) })
        };
        default:
            return state
    }
}

export function checkMatchedLetters(word) {
    return `Nitin ${word}`
}
  