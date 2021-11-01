import { createStore ,applyMiddleware } from "redux";
import countReducer from "./reducer";

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(countReducer, devTools);

export default store;
