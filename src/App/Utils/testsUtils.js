import {createStore} from 'redux'
import rootReducer from '../Store/Reducers'

export const storeFactory = (initialState) => {
    return createStore(rootReducer, initialState)
}

