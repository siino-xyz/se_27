import { style } from "@vanilla-extract/css";
import { sprinkles } from "@css-utils/sprinkles.css";

export const InputBlock = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    borderRadius: "size-2",
    textAlign: "left",
    width: { tablet: "size-9/12", desktop: "size-11/12" },
    position: "relative",
  }),
  {
    boxSizing: "border-box",
  },
]);

export const InputLabel = style([
  sprinkles({
    color: "white",
    fontWeight: "bold",
    fontSize: "base",
    paddingY: "size-1",
  }),
]);

export const ValidationMessage = style([
  sprinkles({
    color: "white",
    position: "absolute",
    background: "error",
    borderRadius: "size-2",
  }),
  {
    top: "-5%",
    left: "-5%",
    backdropFilter: "blur(2px)",
  },
]);

export const InputElement = style([
  sprinkles({
    padding: "size-2",
    width: "size-full",
    borderRadius: "size-1",
    background: "white",
    paddingY: "size-3",
  }),
  {
    boxSizing: "border-box",
    border: "1px solid transparent",
    transitionProperty: "border",
    transitionDuration: "5s",
    transitionTimingFunction: "ease-in-out",
    outline: 0,
    selectors: {
      "&:focus": {
        border: " 1px solid #aaaaaa",
      },
    },
  },
]);

export const TextArea = style([
  sprinkles({
    background: "white",
    width: "size-full",
    minWidth: "size-full",
    borderRadius: "size-1",
  }),
  {
    minHeight: 250,
    boxSizing: "border-box",
    border: "1px solid transparent",
    transitionProperty: "border",
    transitionDuration: "5s",
    transitionTimingFunction: "ease-in-out",
    outline: 0,
    selectors: {
      "&:focus": {
        border: " 1px solid #aaaaaa",
      },
    },
  },
]);

export const SubmitButton = style([
  sprinkles({
    cursor: "pointer",
    textAlign: "center",
    paddingY: "size-1",
    width: { mobile: "size-11/12", desktop: "size-11/12" },
    background: "white",
    color: "black",
    margin: "size-auto",
    fontSize: "2xl",
    fontWeight: "bold",
    borderRadius: "size-1",
  }),
  {
    borderColor: "transparent",
    transition: "all 0.5s ease-out",

    selectors: {
      "&:hover": {
        backgroundColor: "#80ef7e",
      },
    },
  },
]);
