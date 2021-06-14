import React from "react";
import SearchFormContainer from "./SearchFormContainer";
import { css } from "glamor";
import BookResultsListContainer from "../books/BookResultsListContainer";
import MobileMenu from "../menu/MobileMenu";
import DiscoverNewBookContainer from "../discoverNewBook/DiscoverNewBookContainer";
import CurrentlyReadingContainer from "../currentlyReading/CurrentlyReadingContainer";
import ReviewOfTheDays from "../books/ReviewOfTheDays";
import Greeting from "./Greeting";
import ImageBall from "../library/images/imageBall.png";

const container = css({
  height: "100%",
  width: "100%",
  padding: "50px 20px 89px 20px",
  boxSizing: "border-box",
  backgroundColor: "#FFFCF9",
  overflow: "hidden",
  position: "relative",
});
const imageBallClass = css({
  position: "absolute",
  top: "190px",
  right: "-10px",
  borderRadius: "50%",
  backgroundImage: `url(${ImageBall})`,
  backgroundSize: "cover",
  backgroundRepeat: "repeat",
  height: "127px",
  width: "127px",
});

export default function Home(props) {
  const { isSearching, userName } = props;

  return (
    <div className={container}>
      <SearchFormContainer />
      {isSearching ? (
        <BookResultsListContainer />
      ) : (
        <>
          <Greeting userName={userName} />
          <DiscoverNewBookContainer />
          <CurrentlyReadingContainer />
          <ReviewOfTheDays />
        </>
      )}
      <MobileMenu />
      <div className={imageBallClass}></div>
    </div>
  );
}
