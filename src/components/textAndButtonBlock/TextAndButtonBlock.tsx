import { sprinkles } from "src/css-utils/sprinkles.css";
import LinkButton from "../linkButton/LinkButton";
import * as React from "react";

type Props = {
  paragraph: string;
  url: string;
  buttonText: string;
  buttonDisplay: "none" | "block";
};

const TextAndButtonBlock: React.FC<Props> = (props) => {
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
};

export default TextAndButtonBlock;
