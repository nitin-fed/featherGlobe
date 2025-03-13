

import { useState } from "react";
export function useToggle(on) {
  const [toggle, setToggle] = useState(on);
  const toggleHandler = () => setToggle((prevState) => !prevState);
  return [toggle, toggleHandler];
}
