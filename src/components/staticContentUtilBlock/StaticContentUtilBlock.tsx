import * as React from "react";
import { sprinkles } from "../../css-utils/sprinkles.css";
import LinkButton from "../linkButton/LinkButton";
import Paragraph from "../paragraph/Paragraph";
import InnerTitile from "../innerTitle/InnerTitle";
import StaticImage from "../staticImage/StaticImage";

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

const StaticContentUtilBlock: React.FC<ComponentProps> = React.memo(
  function StaticContentUtilBlockMemo(props) {
    return (
      <>
        <InnerTitile title={props.title} />
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
          <StaticImage
            src={props.src}
            width={props.width}
            height={props.height}
            layout={props.layout}
            alt={props.alt}
          />
          <div>
            <Paragraph paragraph={props.para} />
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

export default StaticContentUtilBlock;
