import { style } from "@vanilla-extract/css";
import { sprinkles } from "@css-utils/sprinkles.css";

export const ToBlogTop = style([
  sprinkles({
    color: { lightMode: "gray1", darkMode: "gray1" },
    fontSize: "sm",
    textDecoration: "none",
    transition: "easing",
  }),
  {
    ":hover": {
      color: "#7e8bef",
    },
  },
]);
