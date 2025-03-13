

import React from "react";
import "./styles.css";

export default function Photo({ data }) {
  const { albumId, id, thumbnailUrl, title, url } = data;

  return (
    <div className='stockPhotoThumbnail rounded-lg'>
      <div className='header'>
        <div>Album Id: {albumId} </div>
        <div className='photo-id'> Id: {id}</div>
      </div>
      <div>
        {/* <img alt={title} src={thumbnailUrl} className='thumbnail' /> */}
      </div>
      <div>{title}</div>
    </div>
  );
}
