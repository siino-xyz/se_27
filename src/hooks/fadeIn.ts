import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export const pageFadein = () => {
  const fadeTargetRef = useRef(null);
  const domId = "target";
  useEffect(() => {
    gsap.to(`#${domId}`, {
      opacity: 1,
      duration: 0.5,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: `#${domId}`,
        start: "top",
        markers: false,
      },
    });
  }, []);

  return { fadeTargetRef, domId };
};
