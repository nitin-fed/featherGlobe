/** @format */

import React, { useState, useEffect } from "react";
import { Loader } from "./Loader";
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
      console.log(src + "Completed");
      // updateSrc(placeholder);
    };
  }, [src]);

  useEffect(() => {
    imageRef.current.addEventListener("load", setImageHeight(imageRef));
    imageRef.current.src = src;
  });

  const setImageHeight = (imageRef) => {
    const spanHeight = Math.ceil(imageRef.current.clientHeight / 10);
    setSpanHeight(spanHeight);
  };

 
  return (
    <div style={{ gridRowEnd: `span ${spanHeight}` }}>
      <img
        // lowsrc={src.replace("thumbnail", "lowres")}

        onClick={clickHandler}
        ref={imageRef}
        id={id}
        src={src.replace("thumbnail", "lowres")}
        style={{
          minHeight: 200,
          opacity: loading ? 0.2 : 1,
          transition: "opacity .15s linear"
        }}
        alt={alt}
      />
    </div>
  );
});

export default Thumbnail;
