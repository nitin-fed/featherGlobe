import { combineReducers } from 'redux';

import { postReducer } from './postReducer';
import appReducer from './appReducer';
import galleryReducer from './galleryReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  appReducer: appReducer,
  galleryReducer: galleryReducer,
  postReducer: postReducer,
  usersReduder: usersReducer
});
