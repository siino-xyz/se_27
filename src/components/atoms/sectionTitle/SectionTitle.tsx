import { sprinkles } from "../../../css-utils/sprinkles.css";
import * as React from "react";

type Props = {
  largeText: string;
  smallText: string;
};

export const SectionTitle: React.FC<Props> = (props) => {
  return (
    <div
      className={sprinkles({
        color: "main",
        marginBottom: "size-12",
        marginTop: "size-8",
      })}
    >
      <h2
        className={sprinkles({
          fontFamily: "display",
          fontSize: "max",
          lineHeight: "6xl",
        })}
      >
        {props.largeText}
      </h2>
      <p
        className={sprinkles({
          fontSize: "sm",
          paddingTop: "size-3",
          paddingLeft: "size-0.5",
        })}
      >
        {props.smallText}
      </p>
    </div>
  );
};
