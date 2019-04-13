import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./Reducers/rootReducer";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const middlewares = [thunk];
export const createStoreWithMiddleware = composeEnhancer(
  applyMiddleware(...middlewares)
)(createStore);
export const store = createStoreWithMiddleware(rootReducer);
