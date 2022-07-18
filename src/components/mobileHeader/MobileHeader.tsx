import {
  MobileHader,
  DrawerButton,
  DrawerLine,
  MobileMenuContent,
} from "./MobileHeader.css";
import HeaderLogo from "@components/headerLogo/HeaderLogo";
import HeaderNav from "@components/headerNav/HeaderNav";
import { useState, useRef, CSSProperties, useEffect } from "react";
import { sprinkles } from "@css-utils/sprinkles.css";
import { style } from "@vanilla-extract/css";
import { setElementVars } from "@vanilla-extract/dynamic";
import { vars } from "@css-utils/vars.css";

const MobileHeader = () => {
  const [open, setOpen] = useState<"none" | "block">("none");

  // const mobilemenuElement = document.getElementById("mobilemenu");
  // useEffect(() => {
  //   switch (open) {
  //     case "none": {

  //     }
  //   }
  // });

  return (
    <>
      <div className={MobileHader}>
        <HeaderLogo
          href="/"
          src="/global/se-27-logo-latest.svg"
          alt="logo"
          width={184}
          height={43}
          layout="intrinsic"
        />

        <button className={DrawerButton}>
          <span className={DrawerLine}></span>
          <span className={DrawerLine}></span>
          <span className={DrawerLine}></span>
        </button>
      </div>
      <div id="mobilemenu" className={MobileMenuContent}>
        <HeaderNav />
      </div>
    </>
  );
};

export default MobileHeader;
