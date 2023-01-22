/** @format */

import * as actionType from "../Actions/actionType";

const initialState = {
  photos: {}
};

const galleryReducer = (state = initialState, action) => {
  function findImage(id) {
    var findImage = state.photos.find(
      (photo) => parseInt(photo.id) === parseInt(id)
    );
    return findImage.src;
  }

  switch (action.type) {
    case "LOAD_LARGE_IMAGE":
      return {
        ...state,
        loadLargeImage: true,
        currentSelectedImageId: action.payload.currentId,
        largeImageSrc: findImage(action.payload.currentId)
      };

    case actionType.FETCH_PHOTOS:
      return {
        ...state,
        photos: action.payload.photos
      };

    case "BACKDROP_CLICKED":
      return {
        ...state,
        loadLargeImage: false
      };

    case "PREVIOUS_CLICKED":
      if (state.currentSelectedImageId > 1) {
        const prevId = parseInt(state.currentSelectedImageId) - parseInt(1);
        return {
          ...state,
          currentSelectedImageId: prevId,
          largeImageSrc: findImage(prevId)
        };
      } else {
        return {
          ...state
        };
      }

    case "NEXT_CLICKED":
      console.log("next", state.currentSelectedImageId);

      if (state.currentSelectedImageId < state.photos.length) {
        const nextId = parseInt(state.currentSelectedImageId) + parseInt(1);
        return {
          ...state,
          currentSelectedImageId: nextId,
          largeImageSrc: findImage(nextId)
        };
      } else {
        return {
          ...state
        };
      }
    default: {
      return {
        ...state
      };
    }
  }
};

export default galleryReducer;
