/** @format */

import React, { useState, useEffect } from "react";
import "./Photos.css";

const ImageLoad = React.memo(
  ({ src, placeholder, alt = "", id, clickHandler }) => {
    const [loading, setLoading] = useState(true);
    const [currentSrc, updateSrc] = useState(placeholder);
    const [spanHeight, setSpanHeight] = useState(0);

    const imageRef = React.createRef();
    useEffect(() => {
      const imageToLoad = new Image();
      imageToLoad.src = placeholder;
      imageToLoad.onload = () => {
        setLoading(false);
        updateSrc(placeholder);
      };
    }, [src]);

    useEffect(() => {
      imageRef.current.addEventListener("load", setImageHeight(imageRef));
    });

    const setImageHeight = (imageRef) => {
      const spanHeight = Math.ceil(imageRef.current.clientHeight / 10);
      setSpanHeight(spanHeight);
    };

    console.log(imageRef);

    return (
      <div style={{ gridRowEnd: `span ${spanHeight}` }}>
        <img
          onClick={clickHandler}
          ref={imageRef}
          id={id}
          src={currentSrc}
          style={{
            opacity: loading ? 0.5 : 1,
            transition: "opacity .15s linear"
          }}
          alt={alt}
        />
      </div>
    );
  }
);

export default ImageLoad;
