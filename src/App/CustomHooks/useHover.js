

import React, { useEffect, useRef, useState } from "react";

export default function useHover() {
  const ref = useRef(null);

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const elem = ref.current;

    if (!elem) return;

    const setYes = () => setIsHovering(true);
    const setNo = () => setIsHovering(false);

    elem.addEventListener("mouseenter", setYes);
    elem.addEventListener("mouseout", setNo);

    return () => {
      elem.removeEventListener("mouseenter", setYes);
      elem.removeEventListener("mouseout", setNo);
    };
  }, []);

  return [ref, isHovering];
}
