import * as React from "react";
import Link from "next/link";
import { sprinkles } from "@css-utils";

type ButtonTypes = {
  url: string | null;
  text: string | null;
  buttonDisplay: "none" | "block";
};

const Button: React.FC<ButtonTypes> = (props) => {
  return (
    <div
      className={sprinkles({
        textAlign: "center",
        marginX: "size-8",
        marginY: "size-8",
      })}
      style={{ display: props.buttonDisplay }}
    >
      <Link href={`/${props.url}`} passHref>
        <a
          className={sprinkles({
            textDecoration: "none",
            color: { lightMode: "white", darkMode: "black" },
            textAlign: "center",
            paddingX: "size-5",
            paddingY: "size-3",
            maxWidth: "size-11/12",
            background: { lightMode: "black", darkMode: "white" },
            cursor: "pointer",
            fontSize: "xl",
            borderRadius: "size-1.5",
            fontWeight: "bold",
          })}
        >
          {props.text}
        </a>
      </Link>
    </div>
  );
};

export const LinkButton: React.FC<ButtonTypes> = React.memo(
  function LinkButtonMemo(props) {
    return (
      <>
        <Button
          url={props.url}
          text={props.text}
          buttonDisplay={props.buttonDisplay}
        />
      </>
    );
  }
);
