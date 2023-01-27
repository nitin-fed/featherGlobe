/** @format */

import * as actionType from "./actionType";
import { displayLoader } from "./commonActions";

//TODO: Fetch photos from server, curretly passed hardcoded object
export const fetchPhotos = () => {
  return {
    type: actionType.FETCH_PHOTOS,
    payload: photos
  };
};

export const updatePostReducer = (posts) => {
  return {
    type: actionType.FETCH_POSTS,
    posts: posts
  };
};

export const fetchPostsFails = (error) => {
  return {
    type: actionType.FETCH_POSTS_FAILS
  };
};

export const loadLargeImage = (e) => {
  return {
    type: actionType.LOAD_LARGE_IMAGE,
    payload: { currentId: e.target.id }
  };
};

export const deletePost = (id) => {
  return {
    type: actionType.DELETE_POST,
    payload: { id: id }
  };
};

export const previousClicked = () => {
  return {
    type: actionType.PREVIOUS_CLICKED
  };
};

export const nextClicked = () => {
  return {
    type: actionType.NEXT_CLICKED
  };
};

export const backdropClicked = () => {
  return {
    type: actionType.BACKDROP_CLICKED
  };
};

export const loadPostDescription = (selectedPostId) => {
  return {
    type: actionType.LOAD_POST_DESCRIPTION,
    id: selectedPostId
  };
};

export const addPost = () => {
  return {
    type: actionType.ADD_POST
  };
};

export const editPost = () => {
  return {
    type: actionType.EDIT_POST
  };
};

export const cancelPost = () => {
  return {
    type: actionType.CANCEL_POST
  };
};

export const submitPost = () => {
  return {
    type: actionType.SUBMIT_POST
  };
};

export const buttonGroupClick = () => {
  return {
    type: actionType.CAL_BUTTON_GROUP
  };
};

/* GUESSED WORDS ACTIONS */

export const addGuessedWord = () => {
  return {
    type: actionType.CHECK_WORD
  };
};

export const updateGuessWord = (evt) => {
  return {
    type: actionType.UPDATE_GUESSWORD,
    payload: evt.target.value
  };
};

export const deleteRow = (id) => {
  return {
    type: actionType.DELETE_ROW,
    payload: { id: id }
  };
};

const photos = {
  photos: [
    {
      src: "../gallery/img_d_0.jpg",
      thumbnail: "../gallery/img_t_0.jpg",
      mobile: "../gallery/img_m_0.jpg",
      id: 0
    },
    {
      src: "../gallery/img_d_1.jpg",
      thumbnail: "../gallery/img_t_1.jpg",
      mobile: "../gallery/img_m_1.jpg",
      id: 1
    },
    {
      src: "../gallery/img_d_2.jpg",
      thumbnail: "../gallery/img_t_2.jpg",
      mobile: "../gallery/img_m_2.jpg",
      id: 2
    },
    {
      src: "../gallery/img_d_3.jpg",
      thumbnail: "../gallery/img_t_3.jpg",
      mobile: "../gallery/img_m_3.jpg",
      id: 3
    },
    {
      src: "../gallery/img_d_4.jpg",
      thumbnail: "../gallery/img_t_4.jpg",
      mobile: "../gallery/img_m_4.jpg",
      id: 4
    },
    {
      src: "../gallery/img_d_5.jpg",
      thumbnail: "../gallery/img_t_5.jpg",
      mobile: "../gallery/img_m_5.jpg",
      id: 5
    },
    {
      src: "../gallery/img_d_6.jpg",
      thumbnail: "../gallery/img_t_6.jpg",
      mobile: "../gallery/img_m_6.jpg",
      id: 6
    },
    // {
    //   src: "../gallery/img_d_7.jpg",
    //   thumbnail: "../gallery/img_t_7.jpg",
    //   mobile: "../gallery/img_m_7.jpg",
    //   id: 7
    // },
    {
      src: "../gallery/img_d_8.jpg",
      thumbnail: "../gallery/img_t_8.jpg",
      mobile: "../gallery/img_m_8.jpg",
      id: 8
    },
    {
      src: "../gallery/img_d_9.jpg",
      thumbnail: "../gallery/img_t_9.jpg",
      mobile: "../gallery/img_m_9.jpg",
      id: 9
    },
    {
      src: "../gallery/img_d_10.jpg",
      thumbnail: "../gallery/img_t_10.jpg",
      mobile: "../gallery/img_m_10.jpg",
      id: 10
    },
    {
      src: "../gallery/img_d_11.jpg",
      thumbnail: "../gallery/img_t_11.jpg",
      mobile: "../gallery/img_m_11.jpg",
      id: 11
    },
    {
      src: "../gallery/img_d_12.jpg",
      thumbnail: "../gallery/img_t_12.jpg",
      mobile: "../gallery/img_m_12.jpg",
      id: 12
    },
    {
      src: "../gallery/img_d_13.jpg",
      thumbnail: "../gallery/img_t_13.jpg",
      mobile: "../gallery/img_m_13.jpg",
      id: 13
    },
    {
      src: "../gallery/img_d_14.jpg",
      thumbnail: "../gallery/img_t_14.jpg",
      mobile: "../gallery/img_m_14.jpg",
      id: 14
    },
    {
      src: "../gallery/img_d_15.jpg",
      thumbnail: "../gallery/img_t_15.jpg",
      mobile: "../gallery/img_m_15.jpg",
      id: 15
    },
    {
      src: "../gallery/img_d_16.jpg",
      thumbnail: "../gallery/img_t_16.jpg",
      mobile: "../gallery/img_m_16.jpg",
      id: 16
    },
    {
      src: "../gallery/img_d_17.jpg",
      thumbnail: "../gallery/img_t_17.jpg",
      mobile: "../gallery/img_m_17.jpg",
      id: 17
    }
  ],

  loadLargeImage: false,
  imageToDisplay: null,
  largeImageSrc: null,
  currentSelectedImageId: 0
};
