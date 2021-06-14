import React from "react";
import { css } from "glamor";
import homeIcon from "../library/images/home.png";
import userIcon from "../library/images/user.png";
import bookIcon from "../library/images/book.png";
import { matchPath } from "react-router";
import { useSelector } from "react-redux";

const menuClass = css({
  boxSizing: "border-box",
  paddingTop: "10px",
  width: "100%",
  position: "fixed",
  bottom: 0,
  left: 0,
  backgroundColor: "#FFF",
  height: "59px",
  zIndex: 100,
  display: "flex",
  justifyContent: "space-evenly",
});
const linkClass = css({
  color: "#BFBEBF",
  textDecoration: "none",
});
const menuItemClass = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  ">p": {
    marginTop: "10px",
    marginBottom: "9px",
    fontSize: "10px",
    color: "#BFBEBF",
  },
});
const activeMenuItemClass = css({ ">p": { color: "#313131" } });

export default function Menu(props) {
  const currentPath = useSelector((state) => state.router.location.pathname);

  return (
    <div className={menuClass}>
      <div
        className={css(
          menuItemClass,
          !!matchPath(currentPath, { path: "/" }) && activeMenuItemClass
        )}
      >
        <img alt="home" src={homeIcon} height="16px" width="17.78px"></img>
        <p>Home</p>
      </div>
      <a className={linkClass} href="https://books.google.com.br/">
        <div className={menuItemClass}>
          <img alt="libraries" src={bookIcon} height="18px" width="14.4"></img>
          <p>Libraries</p>
        </div>
      </a>
      <a className={linkClass} href="https://books.google.com.br/">
        <div className={menuItemClass}>
          <img alt="user" src={userIcon} height="16" width="18"></img>
          <p>User</p>
        </div>
      </a>
    </div>
  );
}
