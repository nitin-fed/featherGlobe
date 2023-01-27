/** @format */

import React, { useState, useEffect } from "react";
import "./Photos.css";

const ImageLoad = React.memo(
  ({ src, thumbnail, alt = "", id, clickHandler, mobile }) => {
    const [loading, setLoading] = useState(true);
    const [currentSrc, updateSrc] = useState(thumbnail);
    const [spanHeight, setSpanHeight] = useState(0);

    console.log(src, thumbnail, mobile, id);

    const imageRef = React.createRef();
    useEffect(() => {
      const imageToLoad = new Image();
      imageToLoad.src = thumbnail;
      imageToLoad.onload = () => {
        setLoading(false);
        updateSrc(thumbnail);
      };
    }, [src]);

    useEffect(() => {
      imageRef.current.addEventListener("load", setImageHeight(imageRef));
    });

    const setImageHeight = (imageRef) => {
      console.log(imageRef.current.clientHeight);

      const spanHeight = Math.ceil(imageRef.current.clientHeight / 10);
      setSpanHeight(spanHeight);
    };

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
          // alt={alt}
        />
      </div>
    );
  }
);

export default ImageLoad;
