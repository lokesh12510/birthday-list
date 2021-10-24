import {
  ADD_LIST,
  GET_LIST,
  SET_LOADER,
  TOGGLE_FORM,
  TOGGLE_WISHES,
} from "../Types";

const initialState = {
  birthdayList: [],
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
    case ADD_LIST:
      return {
        ...prevState,
        birthdayList: [...prevState.birthdayList, payload],
        loading: false,
      };
    case GET_LIST:
      return {
        ...prevState,
        birthdayList: payload,
        loading: false,
      };

    default:
      return prevState;
  }
};

export default reducer;
