/** @format */

import React, { useState, useEffect } from "react";
import "./Photos.css";

const Thumbnail = React.memo(({ src, alt = "", id, clickHandler }) => {
  const [loading, setLoading] = useState(true);
  // const [currentSrc, updateSrc] = useState(placeholder);
  const [spanHeight, setSpanHeight] = useState(0);

  const imageRef = React.createRef();
  useEffect(() => {
    const imageToLoad = new Image();
    imageToLoad.src = src;
    imageToLoad.onload = () => {
      setLoading(false);
      // updateSrc(placeholder);
    };
  }, [src]);

  useEffect(() => {
    imageRef.current.addEventListener("load", setImageHeight(imageRef));
  });

  const setImageHeight = (imageRef) => {
    const spanHeight = Math.ceil(imageRef.current.clientHeight / 10);
    setSpanHeight(spanHeight);
  };

  return (
    <div style={{ gridRowEnd: `span ${spanHeight}` }}>
      <img
        onClick={clickHandler}
        ref={imageRef}
        id={id}
        src={src}
        style={{
          opacity: loading ? 0.1 : 1,
          transition: "opacity .15s linear"
        }}
        alt={alt}
      />
    </div>
  );
});

export default Thumbnail;
