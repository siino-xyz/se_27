import { style } from "@vanilla-extract/css";
import { sprinkles } from "@css-utils/sprinkles.css";

export const ScrollTextInnerTitle = style([
  sprinkles({
    paddingTop: "size-6",
    paddingBottom: "size-4",
    color: { lightMode: "main", darkMode: "main" },
  }),
]);

export const IssuesSectionTitle = style([
  sprinkles({
    fontSize: "5xl",
    color: { lightMode: "main", darkMode: "main" },
    fontFamily: "display",
    textAlign: "center",
    marginX: "size-6",
  }),
]);

export const ScrollBox = style([
  sprinkles({
    paddingY: "size-2",
    paddingX: "size-2",
    textAlign: "left",
    borderColor: "main",
    borderRadius: "size-4",
  }),
  {
    overflowY: "auto",
    height: 433,
    borderWidth: 1,
    borderStyle: "solid",
  },
]);
