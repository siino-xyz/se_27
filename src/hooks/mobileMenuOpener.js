import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

export const MobileMenuOpener = () => {
  const [click, setClick] = useState(false);
  const toggle = () => setClick(!click);
  const spMenuContent = useRef(false);
  const openAnimation = useRef(false);

  useEffect(() => {
    if (click === true) {
      spMenuContent.current.style.display = "block";
      openAnimation.current = gsap.to(spMenuContent.current, {
        opacity: 1,
        ease: "power1.out",
      });
    } else {
      openAnimation.current = gsap.to(spMenuContent.current, {
        opacity: 0,
        display: "none",
        ease: "power1.out",
      });
    }
  }, [click]);
  return { toggle, spMenuContent, openAnimation };
};

export default MobileMenuOpener;
