import { combineReducers } from 'redux'

import {postReducer} from './postReducer';
import appReducer from './appReducer';
import galleryReducer from './galleryReducer'

export default combineReducers({
    appReducer: appReducer,
    galleryReducer: galleryReducer,
    postReducer: postReducer
})

 