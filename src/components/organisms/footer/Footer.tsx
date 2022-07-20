import Link from "next/link";
import Image from "next/image";
import { sprinkles } from "@css-utils/sprinkles.css";

export const Footer = () => {
  return (
    <div
      className={sprinkles({
        width: "size-full",
        background: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "size-12",
        paddingBottom: "size-6",
        paddingTop: "size-12",
      })}
    >
      <Link
        className={sprinkles({
          cursor: "pointer",
          width: "size-6/12",
          textAlign: "center",
        })}
        href="/"
        passHref
      >
        <Image
          src="/global/se-27_footer_logo.svg"
          width={338}
          height={107}
          alt="se-27_logo"
          layout="intrinsic"
        />
      </Link>
      <div
        className={sprinkles({
          fontSize: "sm",
        })}
      >
        © 2022 SE-27
      </div>
    </div>
  );
};

export default Footer;
