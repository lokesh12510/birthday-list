import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import getList_reducer from "./reducers/birdayList.reducer";
import toggleReducer from "./reducers/formToggle.reducer";

const rootReducer = combineReducers({ getList_reducer, toggleReducer });

const middleware = [thunk];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
