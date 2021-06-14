import React from "react";
import { css } from "glamor";
import BookMenu from "./BookMenu";
import BackIcon from "./BackIcon";
import ImageBall from "../library/images/imageBall.png";
import { push } from "connected-react-router";

const container = css({
  backgroundColor: "#FFFCF9",
  minHeight: "100vh",
  maxWidth: "100vw",
  padding: "55px 20px 109px 20px",
});
const orangeSquareClass = css({
  backgroundColor: "#FFF6E5",
  boxSizing: "border-box",
  height: "376px",
  margin: "-55px -20px 0 -20px",
  borderBottomRightRadius: "35%",
});
const backClass = css({
  marginTop: "55px",
  marginLeft: "33px",
});
const coverWrapperClass = css({
  display: "flex",
  justifyContent: "center",
});
const bookCoverClass = css({
  height: "234px",
  width: "151px",
  marginTop: "84px",
  marginBottom: "31px",
  borderRadius: "10px",
  zIndex: 1,
});
const redBallClass = css({
  position: "absolute",
  top: "185px",
  left: "47px",
  height: "15px",
  width: "15px",
  backgroundColor: "#FF6978",
  borderRadius: "50%",
});
const blackBallClass = css({
  position: "absolute",
  top: "190px",
  left: "73px",
  height: "63px",
  width: "63px",
  backgroundColor: "#00173D",
  borderRadius: "50%",
});
const blueBorderBallClass = css({
  position: "absolute",
  top: "160px",
  left: "248px",
  height: "24px",
  width: "24px",
  borderRadius: "50%",
  border: "2px solid #4550A7",
});
const imageBallClass = css({
  position: "absolute",
  top: "0px",
  right: "0px",
  borderBottomLeftRadius: "60%",
  backgroundImage: `url(${ImageBall})`,
  backgroundSize: "cover",
  height: "100px",
  width: "100px",
});
const smallImageBallClass = css({
  position: "absolute",
  top: "310px",
  right: "90px",
  backgroundImage: `url(${ImageBall})`,
  backgroundSize: "cover",
  borderRadius: "50%",
  height: "48px",
  width: "48px",
});
const bookInfosWrapperClass = css({
  marginTop: "51px",
});
const bookTitleClass = css({
  fontFamily: "SFProTextBold",
  fontSize: "24px",
  letter: "0.5px",
  lineHeight: "28.64px",
  color: "#36383A",
});
const bookSubTitleClass = css({
  fontFamily: "SFProText",
});
const authorClass = css({
  color: "#FF6978",
  fontSize: "16px",
  lineHeight: "19px",
  letterSpacing: "0.670588px",
  marginTop: "-14px",
});
const descriptionClass = css({
  color: "rgba(49, 49, 49, 0.6)",
  fontSize: "14px",
  lineHeight: "25px",
  letterSpacing: "0.2px",
});
const coverBottomClass = css({
  position: "absolute",
  top: "385px",
  backgroundColor: "#D8D8D8",
  filter: "blur(27.1828px)",
  width: "146px",
  height: "17px",
});

export default function Book(props) {
  const { book, dispatch, loading } = props;

  return loading ? (
    <div className={container}>
      <BackIcon className={backClass} onClick={() => dispatch(push("/"))} />
      <h3>Loading...</h3>
    </div>
  ) : book ? (
    <div className={container}>
      <div className={orangeSquareClass}>
        <BackIcon className={backClass} onClick={() => dispatch(push("/"))} />
        <div className={coverWrapperClass}>
          <img
            className={bookCoverClass}
            alt={book.title}
            src={book.volumeInfo.imageLinks.thumbnail}
          ></img>
          <span className={coverBottomClass}></span>
        </div>
        <span className={redBallClass}></span>
        <span className={blackBallClass}></span>
        <span className={blueBorderBallClass}></span>
        <span className={imageBallClass}></span>
        <span className={smallImageBallClass}></span>
      </div>
      <div className={bookInfosWrapperClass}>
        <div className={bookTitleClass}>
          <h3>
            {book.volumeInfo.title}
            <span className={bookSubTitleClass}>
              {book.volumeInfo.subtitle && `: ${book.volumeInfo.subtitle}`}
            </span>
          </h3>
        </div>
        {book.volumeInfo.authors &&
          book.volumeInfo.authors.map((author) => (
            <p className={authorClass}>{author} </p>
          ))}
        <p className={descriptionClass}>{book.volumeInfo.description}</p>
      </div>

      <BookMenu
        read={book.accessInfo.webReaderLink}
        share={book.volumeInfo.imageLinks.thumbnail}
        listen={book.accessInfo.textToSpeechPermission}
      />
    </div>
  ) : (
    <div className={container}>
      <BackIcon className={backClass} onClick={() => dispatch(push("/"))} />
      <h3>Book not found</h3>
    </div>
  );
}
