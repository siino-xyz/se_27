import HeaderLogo from "@components/atoms/headerLogo/HeaderLogo";
import HeaderNav from "@components/molecules/headerNav/HeaderNav";
import { DesktopHeaderContainer } from "./DesktopHeader.css";
import * as React from "react";

const DesktopHeader = React.memo(function DesktopHeaderMemo() {
  return (
    <div className={DesktopHeaderContainer}>
      <HeaderLogo
        href="/"
        src="/global/se-27-logo-latest.svg"
        alt="logo"
        width={184}
        height={43}
        layout="intrinsic"
      />
      <HeaderNav />
    </div>
  );
});

export default DesktopHeader;
