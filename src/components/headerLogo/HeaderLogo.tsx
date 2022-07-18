import Link from "next/link";
import Image from "next/image";
import { sprinkles } from "@css-utils/sprinkles.css";
import { FC, memo } from "react";

type HeaderLogoTypes = {
  src: string;
  width: number;
  height: number;
  layout: "fixed" | "fill" | "intrinsic" | "responsive";
  alt: string;
  href: string;
};

const HeaderLogo: FC<HeaderLogoTypes> = memo(function HeaderLogoTypesMemo(
  props
) {
  return (
    <Link href={props.href}>
      <a>
        <Image
          src={props.src}
          width={props.width}
          height={props.height}
          layout={props.layout}
          alt={props.alt}
        />
      </a>
    </Link>
  );
});

export default HeaderLogo;
