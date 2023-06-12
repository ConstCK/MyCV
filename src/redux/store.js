import { createStore } from "redux";
import myReducer from "./reducers";
let initialState = { language: "ru" };
const store = createStore(myReducer, initialState);

export default store;
