import * as React from "react";
import { sprinkles } from "@css-utils";
import { LinkButton } from "@components";

type Props = {
  paragraph: string;
  url: string;
  buttonText: string;
  buttonDisplay: "none" | "block";
};

export const TextAndButtonBlock: React.FC<Props> = React.memo(
  function TextAndButtonBlockkMemo(props) {
    return (
      <div
        className={sprinkles({
          display: "grid",
          gridTemplateColumns: {
            mobile: "grid-cols-1",
            tablet: "grid-cols-2",
            desktop: "grid-cols-2",
          },
          alignItems: "center",
        })}
      >
        <p>{props.paragraph}</p>
        <LinkButton
          url={props.url}
          text={props.buttonText}
          buttonDisplay={props.buttonDisplay}
        />
      </div>
    );
  }
);
