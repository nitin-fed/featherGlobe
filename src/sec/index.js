

import React from "react";
import { useEffect } from "react";

export default function SecHome() {
  useEffect(() => {
    window.history("http://sec.featherglobe.com:3000");
  });

  return (
    <div>
      SecHome <p>Cookie {document.cookie}</p>
    </div>
  );
}

