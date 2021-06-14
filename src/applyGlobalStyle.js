import { css } from "glamor";

export default function applyGlobalStyles() {
  css.global("html, body", {
    margin: 0,
    padding: 0,
    height: "100%",
    width: "100%",
  });
}