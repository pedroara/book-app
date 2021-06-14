import React from "react";
import { css } from "glamor";
import searchIcon from "../library/images/search.png";

const container = css({
  width: "100%",
});
const searchClass = css({
  borderRadius: "10px",
  boxShadow: "5px 5px 80px rgba(212, 173, 134, 0.122623)",
  borderStyle: "none",
  height: "48px",
  lineHeight: "18px",
  fontSize: "16px",
  letterSpacing: "0px",
  paddingLeft: 41,
  width: "-webkit-fill-available",
  backgroundColor: "#FDFCFC",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${searchIcon})`,
  backgroundPosition: "left center",
  backgroundPositionX: "15px",
  "::placeholder": {
    color: "#54565A",
  },
});

export default function SearchForm(props) {
  const { handleSubmit, handleChange } = props;

  return (
    <form onSubmit={handleSubmit} className={container}>
      <input
        className={searchClass}
        placeholder="Search book"
        type="text"
        onChange={handleChange}
      />
    </form>
  );
}
