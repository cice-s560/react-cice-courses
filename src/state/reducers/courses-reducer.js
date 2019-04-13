import {
  CICE_COURSE_ADD,
  CICE_COURSE_ADD_SUCCESS,
  CICE_COURSE_ADD_FAIL,
  CICE_COURSE_FIND,
  CICE_COURSE_FIND_SUCCESS
} from "../actions/courses-actions";

const initialState = {
  isLoading: false,
  error: null,
  items: [
    { id: 1, name: "Máster de full-stack" },
    { id: 2, name: "Máster de producción audiovisual" },
    { id: 1, name: "Máster de desarrollo apps" }
  ],
  found: []
};

function coursesReducer(prevState = initialState, action) {
  switch (action.type) {
    // Cuando lanzo la acción delego en Observable
    // cambio mi estado a espera
    case CICE_COURSE_ADD:
    case CICE_COURSE_FIND:
      return {
        ...prevState,
        isLoading: true
      };
    // Observable resuelve OK
    case CICE_COURSE_ADD_SUCCESS:
      return {
        ...prevState,
        items: [...prevState.items, action.payload.response],
        isLoading: false
      };
    // Observable resuelve KO
    case CICE_COURSE_ADD_FAIL:
      return {
        ...prevState,
        error: action.payload.error.message,
        isLoading: false
      };
    case CICE_COURSE_FIND_SUCCESS:
      return {
        ...prevState,
        isLoading: false,
        found: action.payload.result
      };
    default:
      return prevState;
  }
}

export default coursesReducer;
