import { sprinkles } from "@css-utils/sprinkles.css";
import { style } from "@vanilla-extract/css";

export const GlobalStyle = style([
  sprinkles({
    position: "relative",
    fontFamily: "body",
  }),
  {
    fontSize: "15px",
    maxWidth: "1920px",
    overflowX: "hidden",
  },
]);
