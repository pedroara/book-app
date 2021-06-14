import React from "react";
import { css } from "glamor";

export default function BackIcon(props) {
  const { color = "#000", className = {}, onClick } = props;
  return (
    <div onClick={onClick}>
      <svg
        className={css(className)}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 8H1"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 15L1 8L8 1"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
