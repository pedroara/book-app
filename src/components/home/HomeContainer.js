import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../processes/bookProcesses";
import { getFetchedBooks } from "../../selectors/booksSelector";
import Home from "./Home";

export default function HomeContainer(props) {
  const dispatch = useDispatch();
  const isSearching = useSelector((state) => state.form.changed);
  const userName = "Mehmed Al Fatih";
  const books = useSelector((state) => getFetchedBooks(state));
  const currentBookId = useSelector((state) => state.books.currentBookId);

  useEffect(() => {
    //The currentBookId will be the second fetched book when its not defined ;)
    !currentBookId &&
      dispatch({ type: "SET_CURRENT_BOOK_ID", payload: books[1]?.id });
  }, [books, dispatch, currentBookId]);

  useEffect(() => {
    fetchBooks("Originals", dispatch);
  }, [dispatch]);

  return <Home userName={userName} isSearching={isSearching} />;
}
