import React, { useEffect } from 'react';
import Backdrop from '../../Components/Backdrop';

export function PostDescription({ show, onBackdropClicked, selectedPost }) {
  useEffect(() => {
    console.log('rendered');
  }, []);

  if (show) {
    return (
      <div>
        <Backdrop show={show} clicked={onBackdropClicked} />
        <div
          className="postDescription"
          style={{ top: window.pageYOffset + 200 + 'px' }}
        >
          <h1>{selectedPost.id}</h1>
          <h3>{selectedPost.title}</h3>
          <p>{selectedPost.body}</p>
          <button>Delete</button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
