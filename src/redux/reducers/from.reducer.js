import { ADD_FORM, SET_LOADER, TOGGLE_FORM } from "../Types";

const initialState = {
  isOpen: false,
  loading: false,
};

const reducer = (prevState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_LOADER:
      return {
        ...prevState,
        loading: true,
      };

    case TOGGLE_FORM:
      return {
        ...prevState,
        loading: false,
      };
    default:
      return prevState;
  }
};
