import { style } from "@vanilla-extract/css";
import { sprinkles } from "../css-utils/sprinkles.css";

const baseStyles = style([
  sprinkles({
    background: { lightMode: "white", darkMode: "black" },
    color: { lightMode: "black", darkMode: "white" },
    fontFamily: "body",
  }),
  {
    fontSize: "15px",
    maxWidth: "1920px",
    overflowX: "hidden",
  },
]);

export default baseStyles;
