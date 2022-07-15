import * as React from "react";
import { sprinkles } from "../../css-utils/sprinkles.css";
import LinkButton from "../linkButton/LinkButton";
import Paragraph from "../paragraph/Paragraph";
import InnerTitile from "../innerTitle/InnerTitle";
import StaticImage from "../staticImage/StaticImage";

type ComponentProps = {
  title: string | null;
  para: string;
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
  function StaticContentUtilBlockMemo({
    title,
    para,
    src,
    width,
    height,
    alt,
    layout,
    url,
    text,
    buttonDisplay,
  }) {
    return (
      <>
        <InnerTitile title={title} />
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
            src={src}
            width={width}
            height={height}
            layout={layout}
            alt={alt}
          />
          <div>
            <Paragraph paragraph={para} />
            <LinkButton url={url} text={text} buttonDisplay={buttonDisplay} />
          </div>
        </div>
      </>
    );
  }
);

export default StaticContentUtilBlock;
