import { combineEpics } from "redux-observable";
import { createCourseEpics, findCourseEpic } from "./courses-epics";

const combinedEpics = combineEpics(createCourseEpics, findCourseEpic);

export default combinedEpics;
