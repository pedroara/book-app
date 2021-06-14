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

export const getFetchMoreBooks = (values = {}, more, dispatch) => {
  dispatch({ type: "BOOKS_FETCH_REQUESTED" });
  apiGet(`/books/v1/volumes?q=${values}&maxResults=${more}`).then(
    (response) => {
      dispatch({
        type: "BOOKS_FETCHED",
        payload: response.body.items,
      });
    }
  );
};

export const fetchBooks = (values = "", dispatch) => {
  dispatch({ type: "BOOKS_FETCH_REQUESTED" });
  dispatch({ type: "SAVE_LAST_SEARCH", payload: values });
  apiGet(`/books/v1/volumes?q=${values}}&maxResults=9`).then((response) => {
    dispatch({
      type: "BOOKS_FETCHED",
      payload: response.body.items,
    });
  });
};
