import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFetchedBooks } from "../../selectors/booksSelector";
import DiscoverNewBook from "./DiscoverNewBook";

export default function DiscoverNewBookContainer(props) {
  const dispatch = useDispatch();
  const books = useSelector((state) => getFetchedBooks(state).slice(3, 6));
  return <DiscoverNewBook dispatch={dispatch} books={books} />;
}
