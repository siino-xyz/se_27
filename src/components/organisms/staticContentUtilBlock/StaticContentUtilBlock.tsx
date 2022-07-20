import * as React from "react";
import { sprinkles } from "../../../css-utils/sprinkles.css";
import { LinkButton } from "../../atoms/linkButton/LinkButton";
import Image from "next/image";

type ComponentProps = {
  title: string | null;
  para: string | null;
  src: string;
  width: number;
  height: number;
  alt: string;
  layout: "fixed" | "fill" | "intrinsic" | "responsive";
  url: string | null;
  text: string | null;
  buttonDisplay: "none" | "block";
};

export const StaticContentUtilBlock: React.FC<ComponentProps> = React.memo(
  function StaticContentUtilBlockMemo(props) {
    return (
      <>
        <h3
          className={sprinkles({
            fontSize: "xl",
          })}
        >
          {props.title}
        </h3>
        <div
          className={sprinkles({
            display: "grid",
            gridTemplateColumns: {
              mobile: "grid-cols-1",
              desktop: "grid-cols-2",
            },
            alignItems: "center",
          })}
        >
          <Image
            src={props.src}
            width={props.width}
            height={props.height}
            layout={props.layout}
            alt={props.alt}
          />
          <div>
            <p>{props.para}</p>
            <LinkButton
              url={props.url}
              text={props.text}
              buttonDisplay={props.buttonDisplay}
            />
          </div>
        </div>
      </>
    );
  }
);
