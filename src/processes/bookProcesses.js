import { apiGet } from "./helpers/api";

export const fetchBook = (bookId, dispatch) => {
  dispatch({ type: "BOOKS_FETCH_REQUESTED" });
  apiGet(`/books/v1/volumes/${bookId}`).then((response) => {
    dispatch({
      type: "BOOKS_FETCHED",
      payload: [{ ...response.body }],
    });
  });
};

export const fetchBooks = (values = "", dispatch) => {
  dispatch({ type: "BOOKS_FETCH_REQUESTED" });
  apiGet(`/books/v1/volumes?q=${values}`).then((response) => {
    dispatch({
      type: "BOOKS_FETCHED",
      payload: response.body.items,
    });
  });
};
