import Image from "next/image";
import * as React from "react";
import { sprinkles } from "../../css-utils/sprinkles.css";
import LinkButton from "../linkButton/LinkButton";

type Props = {
  title: string | null;
  para: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  url: string | null;
  text: string | null;
  buttonDisplay: "none" | "block";
};

const NotUsing = () => {
  console.log("ノットユージングコンポーネント 呼び出された");
  return (
    <div
      className={sprinkles({
        background: "accent",
        width: "size-2",
        height: "size-12",
      })}
    ></div>
  );
};

const TextWithImage: React.FC<Props> = React.memo((props) => {
  return (
    <>
      <div
        className={sprinkles({
          fontSize: "xl",
        })}
      >
        <h3>{props.title}</h3>
      </div>
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
          layout="intrinsic"
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
});

export default TextWithImage;
