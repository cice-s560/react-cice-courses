export const CICE_COURSE_ADD = "CICE COURSE / add";
export const addCourse = data => ({
  type: CICE_COURSE_ADD,
  payload: {
    data
  }
});

export const CICE_COURSE_ADD_SUCCESS = "CICE COURSE / add success";
export const addCourseSuccess = response => ({
  type: CICE_COURSE_ADD_SUCCESS,
  payload: {
    response
  }
});

export const CICE_COURSE_ADD_FAIL = "CICE COURSE / add fail";
export const addCourseFail = error => ({
  type: CICE_COURSE_ADD_FAIL,
  payload: {
    error
  }
});

export const CICE_COURSE_FIND = "CICE COURSE / find";
export const findCourse = needle => ({
  type: CICE_COURSE_FIND,
  payload: {
    needle
  }
});

export const CICE_COURSE_FIND_SUCCESS = "CICE COURSE / find success";
export const findCourseSuccess = result => ({
  type: CICE_COURSE_FIND_SUCCESS,
  payload: {
    result
  }
});
