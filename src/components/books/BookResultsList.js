import React from "react";
import { css } from "glamor";
import BookResultsListItem from "./BookResultsListItem";

const container = css({
  minHeight: "80vh",
  marginTop: "40px",
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridColumnGap: "17px",
  gridRowGap: "12px",
});
const loadingClass = css(container, {
  color: "#313131",
});
const loadMoreClass = css({
  color: "#4ABDF1",
  display: "flex",
  paddingTop: "15px",
  width: "100%",
  height: "100%",
  alignItems: "flex-end",
  justifyContent: "center",
});

export default function BookList(props) {
  const { books, loading, dispatch, loadMoreHandler, showLoadMore } = props;
  return loading ? (
    <p className={loadingClass}>CARREGANDO...</p>
  ) : (
    <>
      <div className={container}>
        {books &&
          books.map((book) => (
            <BookResultsListItem
              book={book}
              dispatch={dispatch}
              key={book.id}
            />
          ))}
      </div>
      {showLoadMore && (
        <span className={loadMoreClass} onClick={loadMoreHandler}>
          load more
        </span>
      )}
    </>
  );
}
