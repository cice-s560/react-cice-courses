const initialState = {
  items: [
    { id: 1, name: "Máster de full-stack" },
    { id: 2, name: "Máster de producción audiovisual" },
    { id: 1, name: "Máster de desarrollo apps" }
  ]
};

function coursesReducer(prevState = initialState, action) {
  switch (action.type) {
    default:
      return prevState;
  }
}

export default coursesReducer;
