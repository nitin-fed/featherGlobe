

import React, { useEffect, useState } from "react";
import { db } from "../../../firebase-config";
import "./Photos.css";
import { LargeImage } from "./LargeImage";
import Thumbnail from "./Thumbnail";
import { collection, getDocs } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { setShowLargeImage } from "../../Store/Reducers/gallerySlice";
import gallery from "./data";

const Photos = () => {
  console.log("_______________ss");
  const dispatch = useDispatch();
  const [photos, setphotos] = useState(gallery);
  const [currentIndex, setCurrentIndex] = useState(0);
  // const fetchData = async () => {
  //   // const querySnapshot = await getDocs(collection(db, "thumbnail"));
  //   // setphotos(querySnapshot.docs);
  //   setphotos(gallery);
  // };

  const { showLargeImage } = useSelector((state) => state.gallery);

  // useEffect(() => {
  //   // fetchData();
  //   setphotos(gallery);
  // }, []);

  console.log(gallery);

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
                src={`gallery/${photo["thumbnail"]}`}
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
