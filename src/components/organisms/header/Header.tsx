import { DesktopHeader } from "@components/molecules/desktopHeader/DesktopHeader";
import { MobileHeader } from "@components/molecules/mobileHeader/MobileHeader";
import * as React from "react";

export const Header = React.memo(function HeaderMemo() {
  return (
    // <DesktopHeader />
    <MobileHeader />
  );
});
