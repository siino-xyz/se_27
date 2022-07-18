import { sprinkles } from "@css-utils/sprinkles.css";
import { style } from "@vanilla-extract/css";

export const DesktopHeader = style([
  sprinkles({
    width: "size-full",
    background: "sub",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "sticky",
    paddingY: "size-4",
    paddingX: "size-2",
  }),
  {
    top: 0,
    left: 0,
    zIndex: 999,
    opacity: 0.9,
    backdropFilter: "blur(3px)",
  },
]);
