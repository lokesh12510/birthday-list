const initialState = {
  addForm: false,
  editForm: false,
};

const toggleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDFORM":
      return { ...state, addForm: !state.addForm };
    default:
      return state;
  }
};

export default toggleReducer;
