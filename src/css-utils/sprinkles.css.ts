import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { vars } from "./vars.css";

const responsiveStyles = defineProperties({
  conditions: {
    mobile: {},
    tablet: { "@media": "screen and (min-width: 768px)" },
    desktop: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "mobile",
  responsiveArray: ["mobile", "tablet", "desktop"],

  properties: {
    display: ["none", "flex", "block", "inline", "inline-block", "grid"],
    flexDirection: ["row", "column", "row-reverse", "column-reverse"],
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
      "right",
      "left",
    ],
    gridTemplateColumns: vars.gridCols,
    flexGrow: vars.nums,
    gap: vars.sizes,
    paddingTop: vars.sizes,
    paddingBottom: vars.sizes,
    paddingLeft: vars.sizes,
    paddingRight: vars.sizes,
    marginTop: vars.sizes,
    marginRight: vars.sizes,
    marginLeft: vars.sizes,
    marginBottom: vars.sizes,
    fontFamily: vars.fontFamily,
    fontSize: vars.fontSize,
    width: vars.sizes,
    maxWidth: vars.sizes,
    minWidth: vars.sizes,
    height: vars.sizes,
    maxHeight: vars.sizes,
    minHeight: vars.sizes,
    textAlign: ["center", "left", "right"],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    listStyleType: ["none", "circle", "inherit"],
    cursor: ["pointer", "none"],
    position: ["absolute", "relative", "inherit", "fixed", "sticky"],
    left: vars.sizes,
    right: vars.sizes,
    top: vars.sizes,
    bottom: vars.sizes,
    lineHeight: vars.lineHeight,
    textDecoration: vars.textDecoration,
    borderRadius: vars.sizes,
    fontWeight: vars.fontWeight,
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    placeItems: ["justifyContent", "alignItems"],
    margin: ["marginLeft", "marginRight", "marginTop", "marginBottom"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
  },
});

const colorStyles = defineProperties({
  conditions: {
    lightMode: { "@media": "(prefers-color-scheme: light)" },
    darkMode: {},
  },
  defaultCondition: "darkMode",
  properties: {
    color: vars.color,
    background: vars.color,
  },
});

export const sprinkles = createSprinkles(responsiveStyles, colorStyles);
export type Sprinkles = Parameters<typeof sprinkles>[0];
