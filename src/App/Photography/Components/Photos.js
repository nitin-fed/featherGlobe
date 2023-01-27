/** @format */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, loadLargeImage } from "../../Store/Actions/actions";
import "./Photos.css";
import LargeImage from "./LargeImage";
import ImageLoad from "./ImageLoad";

const Photos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch(displayLoader(true));
    dispatch(fetchPhotos());
  }, []);

  const { photos } = useSelector((state) => state.galleryReducer);

  return (
    <div>
      <LargeImage />
      <span className='gallery'>
        {photos.length > 0 &&
          photos.map((photo, index) => {
            return (
              <ImageLoad
                clickHandler={(event) => dispatch(loadLargeImage(event))}
                src={photo.src}
                placeholder={photo.src}
                alt='Decription'
                id={photo.id}
                key={index}
              />
            );
          })}
      </span>
    </div>
  );
};

export default Photos;
