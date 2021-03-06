import { combineReducers } from 'redux';

import { postReducer } from './postReducer';
import appReducer from './appReducer';
import galleryReducer from './galleryReducer';
import usersReducer from './usersReducer';
import { counterReducer } from './counterReducer'
import {guessedWordsReducer} from './guessedWordReducer'

export default combineReducers({
  appReducer: appReducer,
  galleryReducer: galleryReducer,
  postReducer: postReducer,
  usersReduder: usersReducer,
  counterReducer: counterReducer,
  guessedWordsReducer: guessedWordsReducer
});
