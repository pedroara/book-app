import React from "react";
import { css } from "glamor";
import bookIcon from "../library/images/bookOpen.png";
import headphonesIcon from "../library/images/headphones.png";
import shareIcon from "../library/images/share.png";

const container = css({
  display: "flex",
  height: "56px",
  width: "calc(100% - 40px)",
  backgroundColor: "#FFF",
  position: "fixed",
  bottom: "53px",
  left: "20px",
  right: "20px",
  boxShadow: "3px 3px 23px rgba(107, 103, 70, 0.125901)",
  borderRadius: "2px",
});
const menuItemClass = css({
  color: "#3F4043",
  flex: 1,
  fontWeight: "bold",
  fontSize: "14px",
  lineHeight: "17px",
  letterSpacing: "1px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px 22px",
  "& + &": {
    borderLeft: "1px solid rgba(151, 151, 151, 0.2)",
  },
});
const iconClass = css({
  height: "16px",
  width: "16px",
  marginRight: "10px",
});

export default function BookMenu(props) {
  const { book, readHandler } = props;
  return (
    <div className={container} onClick={readHandler}>
      <a href={book?.acessInfo?.webReaderLink} target="_blank" rel="noreferrer">
        <div className={menuItemClass}>
          <img alt="read" className={iconClass} src={bookIcon}></img>Read
        </div>
      </a>
      <div className={menuItemClass}>
        <img alt="listen" className={iconClass} src={headphonesIcon}></img>
        Listen
      </div>
      <div className={menuItemClass}>
        <img alt="share" className={iconClass} src={shareIcon}></img>Share
      </div>
    </div>
  );
}
