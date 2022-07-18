import { useState } from "react";
import { isHidden, isShow } from "@components/mobileHeader/MobileHeader.css";

export const DrawerMenuOpener = () => {
  const [open, setOpen] = useState(isHidden);
  const toggleContent = () =>
    setOpen((menuState) => (menuState === isHidden ? isShow : isHidden));

  return { open, toggleContent };
};
