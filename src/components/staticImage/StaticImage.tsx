// import { sprinkles } from "src/css-utils/sprinkles.css";
import Image from "next/image";
import * as React from "react";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  layout: "fixed" | "fill" | "intrinsic" | "responsive";
};

const StaticImage: React.FC<Props> = React.memo(function StaticImageMemo({
  src,
  alt,
  width,
  height,
  layout,
}) {
  return (
    <>
      <Image
        src={src}
        width={width}
        height={height}
        layout={layout}
        alt={alt}
      />
    </>
  );
});

export default StaticImage;
