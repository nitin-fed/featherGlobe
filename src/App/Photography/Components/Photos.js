/** @format */

import React, { useEffect, useState } from "react";
import { db } from "../../../firebase-config";
import "./Photos.css";
import { LargeImage } from "./LargeImage";
import Thumbnail from "./Thumbnail";
import { collection, getDocs } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { setShowLargeImage } from "../../Store/Reducers/gallerySlice";

const Photos = () => {
  const dispatch = useDispatch();
  const [photos, setphotos] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "thumbnail"));
    setphotos(querySnapshot.docs);
  };
  const { showLargeImage } = useSelector((state) => state.gallery);

  console.log(showLargeImage);

  useEffect(() => {
    fetchData();
  }, []);

  const loadLargeImage = (evt, index) => {
    setCurrentIndex(index);
    dispatch(setShowLargeImage(true));
  };

  return (
    <div>
      {showLargeImage && (
        <LargeImage
          photos={photos}
          showLargeImage={showLargeImage}
          currentIndex={currentIndex}
        />
      )}
      <span className='gallery'>
        {photos.length > 0 &&
          photos.map((photo, index) => {
            return (
              <Thumbnail
                clickHandler={(event) => loadLargeImage(event, index)}
                src={photo.data().imgUrl}
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
