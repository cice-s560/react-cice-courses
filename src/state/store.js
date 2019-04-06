import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import coursesReducer from "./reducers/courses-reducer";

const reducers = combineReducers({
  courses: coursesReducer
});

const store = createStore(reducers, composeWithDevTools());

export default store;
