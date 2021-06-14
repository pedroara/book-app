import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BookResultsList from "./BookResultsList";
import { getFetchedBooks } from "../../selectors/booksSelector";

export default function BookResultsListContainer(props) {
  const books = useSelector((state) => getFetchedBooks(state));
  const loading = useSelector((state) => state.books.loading);
  const dispatch = useDispatch();

  return (
    <BookResultsList dispatch={dispatch} loading={loading} books={books} />
  );
}
