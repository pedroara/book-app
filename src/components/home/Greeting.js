import React from "react";
import { css } from "glamor";
import handIcon from "../library/images/hand.png";

const hiClass = css({
  fontSize: "24px",
  ">span": {
    color: "#EC6374",
  },
});
const handClass = css({
  marginLeft: "10px",
  height: "24px",
  width: "24px",
});

export default function Greeting(props) {
  const { userName } = props;
  return (
    <>
      <h3 className={hiClass}>
        Hi, <span>{userName ?? ""}</span>
        <img className={handClass} alt="hand" src={handIcon}></img>
      </h3>
    </>
  );
}
