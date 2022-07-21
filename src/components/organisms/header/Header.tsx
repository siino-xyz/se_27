import { DesktopHeader, MobileHeader } from "@components";

import * as React from "react";

export const Header = React.memo(function HeaderMemo() {
  return (
    // <DesktopHeader />
    <MobileHeader />
  );
});
