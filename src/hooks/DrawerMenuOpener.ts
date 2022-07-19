import { useState } from "react";
import {
  isHidden,
  isShow,
} from "@components/molecules/mobileHeader/MobileHeader.css";

export const drawerMenuOpener = () => {
  const [open, setOpen] = useState(isHidden);
  const toggleContent = () =>
    setOpen((menuState) => (menuState === isHidden ? isShow : isHidden));

  return { open, toggleContent };
};
