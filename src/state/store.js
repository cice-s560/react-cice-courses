import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import coursesReducer from "./reducers/courses-reducer";
import { createEpicMiddleware } from "redux-observable";
import combinedEpics from "./epics";

const reducers = combineReducers({
  courses: coursesReducer
});

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(combinedEpics);

export default store;
