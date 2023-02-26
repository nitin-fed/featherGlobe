/** @format */

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Backdrop from "../../Components/Backdrop";
import { setShowLargeImage } from "../../Store/Reducers/gallerySlice";

import chevRight from "../../../App/assets/images/chevronRight.svg";
import chevLeft from "../../../App/assets/images/chevronLeft.svg";

import { Loader } from "./Loader";

export const LargeImage = ({ photos, currentIndex }) => {
  const [idx, setIndex] = useState(currentIndex);
  const dispatch = useDispatch();
  const [largeImgSrc, setImgSrc] = useState(photos[idx]);
  const [isLoading, setImageLoading] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    document.querySelector("body").classList.remove("h-screen");
    document.querySelector("body").classList.remove("overflow-y-hidden");
    dispatch(setShowLargeImage(false));
  };

  const nextImage = () => {
    setImageLoading(false);
    idx < photos.length - 1 && setIndex(idx + 1);
  };

  const prevImage = () => {
    setImageLoading(false);
    idx > 0 && setIndex(idx - 1);
  };

  const handleArrowKeys = (evt) => {
    evt.preventDefault();
    var event = window.event ? window.event : evt;
    if (event.keyCode === 37) {
      prevImage();
    } else if (event.keyCode === 39) {
      nextImage();
    }
  };

  useEffect(() => {
    setImgSrc(photos[idx]);
    console.log(photos[idx]);

    if (showLargeImage) {
      document.onkeydown = (event) => handleArrowKeys(event);
    }

    return () => {
      if (showLargeImage) {
        document.onkeydown = null;
      }
    };
  }, [idx]);

  const handleLoad = () => {
    setImageLoading(true);
  };
  const { showLargeImage } = useSelector((state) => state.gallery);

  useEffect(() => {
    if (showLargeImage) {
      document.querySelector("body").className = "h-screen overflow-y-hidden";
    }
  }, [showLargeImage]);

  const getIcon = () => {
    let icons = null;
    if (idx === 0) {
      icons = (
        <>
          <div className='left disabled'>
            <img src={chevLeft} />
          </div>
          <div
            className='right'
            onClick={() => {
              nextImage();
            }}
          >
            <img src={chevRight} />
          </div>
        </>
      );
    } else if (idx + 1 === photos.length) {
      icons = (
        <>
          <div
            className='left'
            onClick={() => {
              prevImage();
            }}
          >
            <img src={chevLeft} />
          </div>
          <div className='right disabled'>
            <img src={chevRight} />
          </div>
        </>
      );
    } else {
      icons = (
        <>
          <div
            className='left'
            onClick={(event) => {
              prevImage();
            }}
          >
            <img src={chevLeft} />
          </div>
          <div
            className='right'
            onClick={(event) => {
              nextImage();
            }}
          >
            <img src={chevRight} />
          </div>
        </>
      );
    }
    return icons;
  };

  if (showLargeImage) {
    return (
      <>
        {!isLoading ? null : (
          <div
            style={{
              zIndex: 52
            }}
            className='imgNavigator'
          >
            {getIcon()}
          </div>
        )}

        <div
          style={{
            zIndex: 51
          }}
          className='largeImage absolute'
          tabIndex='0'
          onClick={(event) => handleClick(event)}
        >
          {isLoading ? "" : <Loader />}
          <img
            onLoad={handleLoad}
            src={largeImgSrc.data().imgUrl.replace("thumbnail", "images")}
            alt='Home page'
            className={
              isLoading
                ? "block  max-w-screen max-h-screen aspect-auto"
                : "hidden"
            }
          />
          <Backdrop show={showLargeImage} clicked={(evt) => handleClick(evt)} />
        </div>
      </>
    );
  } else {
    return null;
  }
};
