import React from "react";
import { css } from "glamor";
import cardImage from "../library/images/blueRectangle.png";
import StatsIcon from "../library/images/stats.png";
import Triangle from "../library/images/triangle.png";
import { push } from "connected-react-router";

const titleClass = css({
  fontSize: "18px",
  marginTop: "10px",
  marginBottom: "15px",
  color: "#3F4043",
});
const titleWrapperClass = css({
  display: "flex",
  alignItems: "baseline",
  justifyContent: "space-between",
  ">a": {
    textDecoration: "none",
    color: "#4ABDF1",
  },
});
const contentClass = css({
  display: "flex",
  overflow: "auto",
  flexWrap: "no-wrap",
  width: "calc(100% + 20px)",
});
const cardClass = css({
  height: "139px",
  minWidth: "272px",
  marginRight: "12px",
  position: "relative",
  borderRadius: "5px",
  zIndex: 1,
  opacity: 0.91,
});
const bookTitleClass = css({
  position: "absolute",
  top: "calc(50% - 36px/2 - 34.5px)",
  left: "15px",
  fontFamily: "PlayfairDisplayBold",
  width: "50%",
  textOverflow: "ellipsis",
  fontSize: "27px",
  height: "36px",
  overflow: "hidden",
  lineHeight: "35.99px",
  letter: "2px",
  color: "#FEFEFE",
});
const authorClass = css({
  fontFamily: "SFProText",
  position: "absolute",
  top: "40px",
  left: "15px",
  width: "50%",
  textOverflow: "ellipsis",
  fontSize: "14px",
  color: "#E7E7E1",
  height: "17px",
  overflow: "hidden",
});
const imageCardClass = css(cardClass, {
  backgroundImage: `url(${cardImage})`,
});
const secondCardClass = css(cardClass, {
  backgroundColor: "#451475",
});
const bookCoverClass = css({
  height: "105px",
  borderRadius: "5px",
  width: "70px",
  position: "absolute",
  top: "10.79%",
  right: "7.35%",
  left: "66.18%",
  bottom: "9.35%",
});
const statsClass = css({
  display: "flex",
  alignItems: "center",
  color: "#E7E7E1",
  position: "absolute",
  top: "103px",
  left: "20px",
  fontSize: "10px",
});
const statsIconClass = css({
  height: "16px",
  width: "16px",
});
const hoursClass = css({
  marginLeft: "4px",
  marginRight: "2px",
  fontFamily: "SFProTextBold",
});
const readNowClass = css({
  fontFamily: "SFProTextMedium",
});
const borderBallClass = css({
  border: "2px solid #4550A7",
  borderRadius: "50%",
  width: "18px",
  height: "18px",
  position: "absolute",
  top: "15px",
  right: "110px",
});
const triangleClass = css({
  position: "absolute",
  top: "3.8px",
  right: "70.63px",
  backgroundImage: `url(${Triangle})`,
  backgroundSize: "cover",
  height: "32.5px",
  width: "32.5px",
});
const rectangleClass = css({
  position: "absolute",
  top: "95px",
  left: "144px",
  backgroundColor: "#EC6374",
  transform: "rotate(14deg)",
  backgroundSize: "cover",
  height: "4px",
  width: "46px",
});

export default function DiscoverNewBook(props) {
  const { books, dispatch } = props;
  return (
    <>
      <div className={titleWrapperClass}>
        <h4 className={titleClass}>Discover new book</h4>
        <a href="https://books.google.com.br/" target="_blank" rel="noreferrer">
          More
        </a>
      </div>
      <div className={contentClass}>
        {books.map((book, index) => (
          <div
            onClick={() => dispatch(push(`/books/${book.id}`))}
            key={book.id}
            className={css(
              (index + 1) % 2 !== 0 ? imageCardClass : secondCardClass
            )}
          >
            <span className={bookTitleClass}>{book.volumeInfo.title}</span>
            <p className={authorClass}>{book.volumeInfo.authors[0]}</p>
            <div className={statsClass}>
              <img className={statsIconClass} src={StatsIcon}></img>
              <span className={hoursClass}>
                {/* Sorry ;-; */}
                {(index + 1) % 2 !== 0 ? 120 : 90}+{" "}
              </span>
              <span className={readNowClass}>Read Now</span>
            </div>
            <img
              className={bookCoverClass}
              src={book.volumeInfo.imageLinks.thumbnail}
            ></img>
            <div className={borderBallClass}></div>
            <div className={triangleClass}></div>
            <div className={rectangleClass}></div>
          </div>
        ))}
      </div>
    </>
  );
}
