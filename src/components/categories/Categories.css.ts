import { style } from "@vanilla-extract/css";
import { sprinkles } from "@css-utils/sprinkles.css";

export const CategoryTag = style([
  sprinkles({
    background: "white",
    paddingY: "size-0.5",
    paddingX: "size-4",
    borderRadius: "size-1.5",
    transition: "easing",
  }),
  {
    ":hover": {
      background: "#80ef7e",
    },
  },
]);
