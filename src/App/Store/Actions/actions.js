/** @format */

import * as actionType from "./actionType";
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
      src: "../photos/photos/0C9A0174.jpg",
      id: 1,
      placeholder: "../photos/placeholder/0C9A0174.jpg"
    },
    {
      src: "../photos/photos/0C9A0927.jpg",
      id: 2,
      placeholder: "../photos/placeholder/0C9A0927.jpg"
    },
    {
      src: "../photos/photos/duck.jpg",
      id: 3,
      placeholder: "../photos/placeholder/duck.jpg"
    },
    {
      src: "../photos/photos/0C9A0189.jpg",
      id: 4,
      placeholder: "../photos/placeholder/0C9A0189.jpg"
    },
    {
      src: "../photos/photos/0C9A0928.jpg",
      id: 5,
      placeholder: "../photos/placeholder/0C9A0928.jpg"
    },
    {
      src: "../photos/photos/duck1.jpg",
      id: 6,
      placeholder: "../photos/placeholder/duck1.jpg"
    },
    {
      src: "../photos/photos/0C9A0191.jpg",
      id: 7,
      placeholder: "../photos/placeholder/0C9A0191.jpg"
    },
    {
      src: "../photos/photos/0C9A0958.jpg",
      id: 8,
      placeholder: "../photos/placeholder/0C9A0958.jpg"
    },
    {
      src: "../photos/photos/dumbartonBridge.jpg",
      id: 9,
      placeholder: "../photos/placeholder/dumbartonBridge.jpg"
    },
    {
      src: "../photos/photos/0C9A0235.jpg",
      id: 10,
      placeholder: "../photos/placeholder/0C9A0235.jpg"
    },
    {
      src: "../photos/photos/IndianRoller.jpg",
      id: 11,
      placeholder: "../photos/placeholder/IndianRoller.jpg"
    },
    {
      src: "../photos/photos/Sandpiper.jpg",
      id: 14,
      placeholder: "../photos/placeholder/Sandpiper.jpg"
    },
    {
      src: "../photos/photos/goldflinch.jpg",
      id: 15,
      placeholder: "../photos/placeholder/goldflinch.jpg"
    },
    {
      src: "../photos/photos/0C9A0241.jpg",
      id: 16,
      placeholder: "../photos/placeholder/0C9A0241.jpg"
    },
    {
      src: "../photos/photos/bird.jpg",
      id: 17,
      placeholder: "../photos/placeholder/bird.jpg"
    },
    {
      src: "../photos/photos/jay.jpg",
      id: 18,
      placeholder: "../photos/placeholder/jay.jpg"
    },
    {
      src: "../photos/photos/0C9A0245.jpg",
      id: 19,
      placeholder: "../photos/placeholder/0C9A0245.jpg"
    },
    {
      src: "../photos/photos/bird1.jpg",
      id: 20,
      placeholder: "../photos/placeholder/bird1.jpg"
    },
    {
      src: "../photos/photos/lightHousre.jpg",
      id: 21,
      placeholder: "../photos/placeholder/lightHousre.jpg"
    },
    {
      src: "../photos/photos/0C9A0246.jpg",
      id: 22,
      placeholder: "../photos/placeholder/0C9A0246.jpg"
    },
    {
      src: "../photos/photos/bird2.jpg",
      id: 23,
      placeholder: "../photos/placeholder/bird2.jpg"
    },
    {
      src: "../photos/photos/pointRayes.jpg",
      id: 24,
      placeholder: "../photos/placeholder/pointRayes.jpg"
    },
    {
      src: "../photos/photos/0C9A0278.jpg",
      id: 25,
      placeholder: "../photos/placeholder/0C9A0278.jpg"
    },
    {
      src: "../photos/photos/bird_1.jpg",
      id: 26,
      placeholder: "../photos/placeholder/bird_1.jpg"
    },
    {
      src: "../photos/photos/sparrow1.jpg",
      id: 27,
      placeholder: "../photos/placeholder/sparrow1.jpg"
    },
    {
      src: "../photos/photos/0C9A0800.jpg",
      id: 28,
      placeholder: "../photos/placeholder/0C9A0800.jpg"
    },
    {
      src: "../photos/photos/deer.jpg",
      id: 29,
      placeholder: "../photos/placeholder/deer.jpg"
    },
    {
      src: "../photos/photos/yosemite.jpg",
      id: 30,
      placeholder: "../photos/placeholder/yosemite.jpg"
    },
    {
      src: "../photos/photos/0C9A0831.jpg",
      id: 31,
      placeholder: "../photos/placeholder/0C9A0831.jpg"
    },
    {
      src: "../photos/photos/donEdward.jpg",
      id: 32,
      placeholder: "../photos/placeholder/donEdward.jpg"
    }
  ],
  gallery: [
    {
      category: "birds",
      photos: [
        { src: "../photos/photos/bird.jpg", id: 1 },
        { src: "../photos/photos/yosemite.jpg", id: 2 },
        { src: "../photos/photos/sparrow1.jpg", id: 3 },
        { src: "../photos/photos/deer.jpg", id: 4 },
        { src: "../photos/photos/sparrow.jpg", id: 5 },
        { src: "../photos/photos/Sandpiper.jpg", id: 6 },
        { src: "../photos/photos/pointRayes.jpg", id: 7 },
        { src: "../photos/photos/lightHousre.jpg", id: 8 },
        { src: "../photos/photos/IndianRoller.jpg", id: 9 },
        { src: "../photos/photos/goldflinch.jpg", id: 10 },
        { src: "../photos/photos/gnotcatcher.jpg", id: 11 },
        { src: "../photos/photos/dumbartonBridge.jpg", id: 12 },
        { src: "../photos/photos/donEdward.jpg", id: 13 }
      ]
    },
    {
      category: "nature",
      photos: [
        { src: "../photos/photos/bird.jpg", id: 1 },
        { src: "../photos/photos/yosemite.jpg", id: 2 }
      ]
    },
    {
      category: "bridge",
      photos: [
        { src: "../photos/photos/dumbartonBridge.jpg", id: 12 },
        { src: "../photos/photos/donEdward.jpg", id: 13 }
      ]
    }
  ],
  loadLargeImage: false,
  imageToDisplay: null,
  largeImageSrc: null,
  currentSelectedImageId: 0
};
