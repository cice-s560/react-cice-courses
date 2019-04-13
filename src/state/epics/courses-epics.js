import {
  CICE_COURSE_ADD,
  addCourseSuccess,
  addCourseFail,
  CICE_COURSE_FIND,
  findCourseSuccess
} from "../actions/courses-actions";
import { ajax } from "rxjs/ajax";
import { mergeMap, map, catchError, debounceTime } from "rxjs/operators";
import { ofType } from "redux-observable";
import { of } from "rxjs";

export const createCourseEpics = action$ =>
  action$.pipe(
    ofType(CICE_COURSE_ADD),
    mergeMap(originalAction =>
      ajax
        .post(
          "https://jsonplaceholder.typicode.com/todos",
          originalAction.payload.data
        )
        .pipe(
          map(response => addCourseSuccess(originalAction.payload.data)),
          catchError(err => of(addCourseFail({ error: err })))
        )
    )
  );

export const findCourseEpic = (action$, reduxStore) => {
  return action$.pipe(
    ofType(CICE_COURSE_FIND),
    debounceTime(1000),
    mergeMap(originalAction =>
      ajax
        .getJSON(
          "https://jsonplaceholder.typicode.com/todos?" +
            "course=" +
            originalAction.payload.needle
        )
        .pipe(
          map(response => findCourseSuccess(reduxStore.value.courses.items))
        )
    )
  );
};
