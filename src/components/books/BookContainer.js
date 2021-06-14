import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Book from "./Book";
import { getBookById } from "../../selectors/booksSelector";
import { fetchBook } from "../../processes/bookProcesses";

export default function BookContainer(props) {
  const dispatch = useDispatch();
  const bookId = useSelector(
    (state) => state.router.location.pathname.split("/")[2]
  );
  useEffect(() => {
    fetchBook(bookId, dispatch);
  }, [bookId, dispatch]);
  const loading = useSelector((state) => state.books.loading);
  const book = useSelector((state) => getBookById(state, bookId));

  return <Book loading={loading} dispatch={dispatch} book={book} />;
}
