import React from "react";
import { css } from "glamor";
import truncateString from "../../utils/truncateString";
import { push } from "connected-react-router";
import ImageBall from "../library/images/imageBall.png";
import BookIcon from "../library/images/currentBook.png";
import Rectangle from "../library/images/rectangle.png";

const titleWrapper = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  ">a": {
    textDecoration: "none",
    color: "#4ABDF1",
  },
});
const titleClass = css({
  fontSize: "18px",
  marginTop: "30px",
  paddingBottom: "15px",
  color: "#3F4043",
});
const cardClass = css({
  position: "relative",
  width: "100%",
  height: "auto",
  marginLeft: "-20px",
  backgroundColor: "#EEF5DB",
  borderTopRightRadius: "6px",
  borderBottomRightRadius: "6px",
  boxShadow: "0px 3px 45px rgba(121, 141, 67, 0.115084)",
});
const bookCoverClass = css({
  margin: "-17px 0 -17px 19px",
  borderRadius: "5px",
});
const bookTitleClass = css({
  fontFamily: "PlayfairDisplay",
  lineHeight: "26,66px",
  letter: "2px",
  fontSize: "20px",
  fontWeight: "700px",
  color: "#2A2B26",
  position: "absolute",
  top: 0,
  left: "160px",
  width: "max(40%, calc(70% - 100px))",
  textOverflow: "ellipsis",
  overflow: "hidden",
  height: "26px",
});
const imageBallClass = css({
  borderTopRightRadius: "6px",
  position: "absolute",
  top: "0px",
  right: "0px",
  borderBottomLeftRadius: "60%",
  backgroundImage: `url(${ImageBall})`,
  backgroundSize: "cover",
  height: "69px",
  width: "69px",
});
const borderBallClass = css({
  border: "2px solid #4550A7",
  borderRadius: "50%",
  width: "18px",
  height: "18px",
  position: "absolute",
  top: "-9px",
  right: "100px",
});
const rectangleClass = css({
  position: "absolute",
  bottom: "25px",
  right: "0px",
  backgroundImage: `url(${Rectangle})`,
  backgroundSize: "cover",
  height: "30px",
  width: "30px",
});
const authorsClass = css({
  fontSize: "10px",
  color: "#74776D",
  marginTop: "5px",
  position: "absolute",
  top: "45px",
  left: "160px",
  width: "max(40%, calc(70% - 100px))",
  textOverflow: "ellipsis",
  overflow: "hidden",
  height: "12px",
});
const progressWrapperClass = css({
  display: "flex",
  alignItems: "center",
  position: "absolute",
  left: "160px",
  bottom: "10.67px",
});
const bookIconClass = css({
  backgroundImage: `url(${BookIcon})`,
  height: "16px",
  width: "16px",
  marginRight: "5px",
});
const chapterClass = css({
  fontFamily: "SFProText",
  fontSize: "10px",
  lineHeight: "11,93px",
});
const numberChapterClass = css({
  color: "#EC6374",
});
const shadowBallClass = css({
  backgroundColor: "rgba(214, 209, 177, 0.09)",
  position: "absolute",
  bottom: "-20px",
  right: "-10px",
  height: "116px",
  width: "116px",
  borderRadius: "50%",
});

const authorsNames = (authors) => {
  if (!authors) return null;
  return authors.length < 2
    ? `by ${authors[0]}`
    : `by ${authors.map((author, index) =>
        index !== authors.length
          ? ` ${authors[index]}`
          : ` ${authors[index]} and `
      )}`;
};
const exampleCurrentChapter = 2;
const exampleTotalChapters = 9;

export default function CurrentlyReading(props) {
  const { book, dispatch } = props;
  return (
    <>
      <div className={titleWrapper}>
        <h4 className={titleClass}>Currently Reading</h4>
        <a href="https://books.google.com.br/" target="_blank" rel="noreferrer">
          All
        </a>
      </div>
      <div
        className={cardClass}
        onClick={() => dispatch(push(`/books/${book?.id}`))}
      >
        <img
          className={bookCoverClass}
          alt="book.title"
          src={book?.volumeInfo?.imageLinks?.thumbnail}
        ></img>
        <p className={bookTitleClass}>
          {truncateString(book?.volumeInfo?.title, 70)}
        </p>
        <p className={authorsClass}>
          {authorsNames(book?.volumeInfo?.authors)}
        </p>
        <div className={progressWrapperClass}>
          <div className={bookIconClass}></div>
          <p className={chapterClass}>
            Chapter{" "}
            <span className={numberChapterClass}>{exampleCurrentChapter}</span>{" "}
            From {exampleTotalChapters}
          </p>
        </div>
        <div className={imageBallClass}></div>
        <div className={borderBallClass}></div>
        <div className={shadowBallClass}></div>
        <div className={rectangleClass}></div>
      </div>
    </>
  );
}
