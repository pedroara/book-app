import React from "react";
import { css } from "glamor";
import defaultThumbnail from "../library/images/videoThumbnail.jpeg";

const titleWrapper = css({
  display: "flex",
  paddingTop: "17px",
  alignItems: "baseline",
  justifyContent: "space-between",
  ">a": {
    textDecoration: "none",
    color: "#4ABDF1",
  },
});
const titleClass = css({
  fontSize: "18px",
  marginTop: "30px",
  marginBottom: "15px",
  color: "#3F4043",
});
const cardClass = css({
  width: "100%",
  height: "0",
  paddingTop: "60%",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  borderRadius: "10px",
});

export default function ReviewOfTheDays(props) {
  const {
    videoThumbnail = defaultThumbnail,
    videoPath = "https://www.youtube.com/watch?v=vBzBgewl4ac",
  } = props;
  return (
    <>
      <div className={titleWrapper}>
        <h4 className={titleClass}>Reviews of The Days</h4>
        <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
          All video
        </a>
      </div>
      <a href={videoPath} target="_blank" rel="noreferrer">
        <div
          className={css(cardClass, {
            backgroundImage: `url(${videoThumbnail})`,
          })}
        ></div>
      </a>
    </>
  );
}
