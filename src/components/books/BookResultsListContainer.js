import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookResultsList from "./BookResultsList";
import { getFetchedBooks } from "../../selectors/booksSelector";
import { getFetchMoreBooks } from "../../processes/bookProcesses";

export default function BookResultsListContainer(props) {
  const books = useSelector((state) => getFetchedBooks(state));
  const loading = useSelector((state) => state.books.loading);
  const dispatch = useDispatch();
  const [more, setMore] = useState(18);
  const values = useSelector((state) => state.form.values);

  const loadMoreHandler = useCallback(() => {
    more + 9 < 45 && setMore(more + 9);
    getFetchMoreBooks(values, more, dispatch);
  }, [more]);

  return (
    <BookResultsList
      showLoadMore={more + 9 < 45}
      loadMoreHandler={loadMoreHandler}
      dispatch={dispatch}
      loading={loading}
      books={books}
    />
  );
}
