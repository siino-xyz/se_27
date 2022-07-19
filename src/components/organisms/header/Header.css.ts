import { sprinkles } from "@css-utils/sprinkles.css";
import { style, assignVars, createThemeContract } from "@vanilla-extract/css";

export const MobileMenuContent = style([
  sprinkles({
    position: "fixed",
    width: "size-full",
    background: "black",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  }),
  {
    height: "100vh",
    zIndex: 980,
  },
]);
