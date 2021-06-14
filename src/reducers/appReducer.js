import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import booksReducer from "./booksReducer";
import formReducer from "./formReducer";

export default function appReducer(history) {
  return combineReducers({
    books: booksReducer,
    form: formReducer,
    router: connectRouter(history),
  });
}
