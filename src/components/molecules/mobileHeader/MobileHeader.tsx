import HeaderLogo from "@components/atoms/headerLogo/HeaderLogo";
import HeaderNav from "@components/molecules/headerNav/HeaderNav";
import { MobileHader, DrawerButton, DrawerLine } from "./MobileHeader.css";
import * as React from "react";
import { drawerMenuOpener } from "@hooks/drawerMenuOpener";

const MobileHeader = React.memo(function MobileHeaderMemo() {
  const { toggleContent, open } = drawerMenuOpener();
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
        <button className={DrawerButton} onClick={toggleContent}>
          <span className={DrawerLine}></span>
          <span className={DrawerLine}></span>
          <span className={DrawerLine}></span>
        </button>
      </div>
      <div className={open}>
        <HeaderNav />
      </div>
    </>
  );
});

export default MobileHeader;
