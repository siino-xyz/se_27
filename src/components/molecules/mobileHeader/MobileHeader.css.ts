import { sprinkles } from "@css-utils/sprinkles.css";
import { style } from "@vanilla-extract/css";

//スマホ

export const MobileHader = style([
  sprinkles({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "sticky",
    padding: "size-0.5",
  }),
  {
    top: 0,
    left: 0,
    zIndex: 999,
    opacity: 0.9,
    backdropFilter: "blur(3px)",
  },
]);

export const DrawerButton = style([
  sprinkles({
    position: "relative",
  }),
  {
    outline: "none",
    border: "none",
    background: "transparent",
    appearance: "none",
    width: "45px",
    height: "45px",
  },
]);

export const DrawerLine = style([
  sprinkles({
    width: "size-10/12",
    background: { lightMode: "black", darkMode: "white" },
    borderRadius: "size-0.5",
    position: "absolute",
    cursor: "pointer",
  }),
  {
    height: "5px",
    left: "8%",
    selectors: {
      "&:nth-child(n)": {
        top: "11%",
      },
      "&:nth-child(2n)": {
        top: "44%",
      },
      "&:nth-child(3n)": {
        top: "78%",
      },
    },
  },
]);

export const isHidden = style([
  sprinkles({
    display: "none",
    transition: "easing",
  }),
]);

export const isShow = style([
  sprinkles({
    position: "fixed",
    width: "size-full",
    background: { darkMode: "black" },
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  }),
  {
    height: "100vh",
    top: 0,
    left: 0,
    zIndex: 980,
  },
]);
