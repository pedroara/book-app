import React, { useEffect } from "react";
import CurrentlyReading from "./CurrentlyReading";
import { fetchBook } from "../../processes/bookProcesses";
import { useDispatch, useSelector } from "react-redux";
import { getBookById } from "../../selectors/booksSelector";

export default function CurrentlyReadingContainer(props) {
  const dispatch = useDispatch();
  const currentBookId = useSelector((state) => state.books.currentBookId);
  const book = useSelector((state) => getBookById(state, currentBookId));
  useEffect(() => {
    !book && currentBookId && fetchBook(currentBookId, dispatch);
  }, [book, currentBookId, dispatch]);

  return <CurrentlyReading book={book} dispatch={dispatch} />;
}
