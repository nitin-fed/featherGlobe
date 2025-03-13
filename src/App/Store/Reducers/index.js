

import { combineReducers } from "redux";

import { postReducer } from "./postReducer";
import galleryReducer from "./galleryReducer";
import usersReducer from "./usersReducer";
import { counterReducer } from "./counterReducer";
import { guessedWordsReducer } from "./guessedWordReducer";
import { articleReducers } from "../../Demo/Article/ArticleReducer";
import userReducer from "./userReducer";
import commonReducer from "./commonReducer";
import modalSlice from "./modalSlice";
import appSlice from "./appSlice";
import gallerySlice from "./gallerySlice";
import profileSlice from "./profileSlice";
import { secretWordReducer } from "../../Jotto/Jotto_Reducers";
import { jottoGuessWordReducer } from "../../Jotto/Jotto_Reducers/jottoGuessWordReducer";
import { jottoSecretWordReducer } from "../../Jotto/Jotto_Reducers/jottoSecretWordReducer";

export default combineReducers({
  galleryReducer: galleryReducer,
  postReducer: postReducer,
  usersReduder: usersReducer,
  counterReducer: counterReducer,
  guessedWordsReducer: guessedWordsReducer,
  articleReducers: articleReducers,
  userReduder: userReducer,
  commonReducer: commonReducer,
  modalReducer: modalSlice,
  profileReducer: profileSlice,
  secretWordReducer: secretWordReducer,
  jottoGuessWordReducer: jottoGuessWordReducer,
  jottoSecretWordReducer: jottoSecretWordReducer,
  appReducer: appSlice,
  gallery: gallerySlice
});
