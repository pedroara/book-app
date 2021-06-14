import React, { useCallback } from "react";
import BookMenu from "./BookMenu";
import { getBookById } from "../../selectors/booksSelector";
import { useDispatch, useSelector } from "react-redux";

export default function BookMenuContainer(props) {
  const { bookId } = props;
  const dispatch = useDispatch();
  const book = useSelector((state) => getBookById(state, bookId));
  const readHandler = useCallback(() => {
    dispatch({ type: "SET_CURRENT_BOOK_ID", payload: book.id });
  }, [dispatch, book]);
  return <BookMenu readHandler={readHandler} book={book} />;
}
