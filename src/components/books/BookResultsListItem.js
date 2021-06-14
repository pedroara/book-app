import React from "react";
import { css } from "glamor";
import { push } from "connected-react-router";

const bookClass = css({
  padding: 0,
  maxWidth: "103px",
});
const bookCoverClass = css({
  backgroundColor: "#313131",
  borderRadius: "5px",
  height: "153px",
  maxWidth: "inherit",
});
const typographyClass = css({
  color: "rgba(49, 49, 49, 0.8)",
});
const titleClass = css(typographyClass, {
  fontFamily: "SFProTextMedium",
  marginTop: "9px",
  lineHeight: "14.32px",
  fontSize: "12px",
  marginBottom: "5px",
});
const authorClass = css(typographyClass, {
  fontFamily: "SFProTextBold",
  fontSize: "10px",
  lineHeight: "11.72px",
  marginTop: 0,
});

export default function BookResultsListItem(props) {
  const { book, dispatch } = props;
  return book ? (
    <div
      className={bookClass}
      onClick={() => dispatch(push(`/books/${book.id}`))}
    >
      <img
        className={bookCoverClass}
        src={book?.volumeInfo?.imageLinks?.thumbnail}
        alt={book?.volumeInfo?.title}
      ></img>
      <h6 className={titleClass}>{book?.volumeInfo?.title}</h6>
      <p className={authorClass}>
        by{" "}
        {book?.volumeInfo?.authors instanceof Array &&
          book?.volumeInfo?.authors[0]}
      </p>
    </div>
  ) : (
    <div
      className={bookClass}
      onClick={() => dispatch(push(`/books/${book.id}`))}
    >
      <div className={bookCoverClass}></div>
      <h6 className={titleClass}>▀▀▀▀▀▀▀▀▀▀▀▀▀</h6>
      <p className={authorClass}>by ▀▀▀▀▀▀▀▀</p>
    </div>
  );
}
