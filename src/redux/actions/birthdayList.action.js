import { ADD_LIST, GET_LIST, SET_LOADER, TOGGLE_WISHES } from "../Types";
import { db } from "../../firebase";

export const get_list = () => async (dispatch) => {
  try {
    dispatch({
      type: SET_LOADER,
    });

    const snapshot = await db.collection("birthday-wishes").get();

    const data = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    dispatch({
      type: GET_LIST,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const add_list = (data) => async (dispatch) => {
  try {
    dispatch({
      type: SET_LOADER,
    });
    await db.collection("birthday-wishes").doc(data.id.toString()).set(data);
    dispatch({
      type: ADD_LIST,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const toggle_wishes = (id) => async (dispatch) => {
  try {
    dispatch({
      type: SET_LOADER,
    });
    const snapshot = db.collection("birthday-wishes").doc(id);
    const data = (await snapshot.get()).data();

    await snapshot.update({
      isWished: !data.isWished,
    });

    dispatch(get_list());
  } catch (error) {
    console.log(error);
  }
};
