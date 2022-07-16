import { style } from "@vanilla-extract/css";
import { sprinkles } from "@css-utils/sprinkles.css";

export const Card = style([
  sprinkles({
    background: "black",
    borderRadius: "size-1",
    padding: "size-0.5",
    borderColor: "sub",
  }),
  {
    borderWidth: 1,
    borderStyle: "solid",
  },
]);

export const PostCaptions = style([
  sprinkles({ borderColor: "sub", paddingY: "size-2", paddingX: "size-1" }),
  {
    borderWidth: 1,
    borderStyle: "solid",
  },
]);

export const Tag = style([
  sprinkles({
    background: "sub",
    color: "black",
    display: "inline-block",
    paddingX: "size-1",
    paddingY: "size-4",
  }),
]);
