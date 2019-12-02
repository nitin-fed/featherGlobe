const initialState = {
  photos: [
    { src: '../photos/0C9A0174.jpg', id: 1 },
    { src: '../photos/0C9A0927.jpg', id: 2 },
    { src: '../photos/duck.jpg', id: 3 },
    { src: '../photos/0C9A0189.jpg', id: 4 },
    { src: '../photos/0C9A0928.jpg', id: 5 },
    { src: '../photos/duck1.jpg', id: 6 },
    { src: '../photos/0C9A0191.jpg', id: 7 },
    { src: '../photos/0C9A0958.jpg', id: 8 },
    { src: '../photos/dumbartonBridge.jpg', id: 9 },
    { src: '../photos/0C9A0235.jpg', id: 10 },
    { src: '../photos/IndianRoller.jpg', id: 11 },
    { src: '../photos/Sandpiper.jpg', id: 14 },
    { src: '../photos/goldflinch.jpg', id: 15 },
    { src: '../photos/0C9A0241.jpg', id: 16 },
    { src: '../photos/bird.jpg', id: 17 },
    { src: '../photos/jay.jpg', id: 18 },
    { src: '../photos/0C9A0245.jpg', id: 19 },
    { src: '../photos/bird1.jpg', id: 20 },
    { src: '../photos/lightHousre.jpg', id: 21 },
    { src: '../photos/0C9A0246.jpg', id: 22 },
    { src: '../photos/bird2.jpg', id: 23 },
    { src: '../photos/pointRayes.jpg', id: 24 },
    { src: '../photos/0C9A0278.jpg', id: 25 },
    { src: '../photos/bird_1.jpg', id: 26 },
    { src: '../photos/sparrow1.jpg', id: 27 },
    { src: '../photos/0C9A0800.jpg', id: 28 },
    { src: '../photos/deer.jpg', id: 29 },
    { src: '../photos/yosemite.jpg', id: 30 },
    { src: '../photos/0C9A0831.jpg', id: 31 },
    { src: '../photos/donEdward.jpg', id: 32 }
  ],
  gallery: [
    {
      category: 'birds',
      photos: [
        { src: '../photos/bird.jpg', id: 1 },
        { src: '../photos/yosemite.jpg', id: 2 },
        { src: '../photos/sparrow1.jpg', id: 3 },
        { src: '../photos/deer.jpg', id: 4 },
        { src: '../photos/sparrow.jpg', id: 5 },
        { src: '../photos/Sandpiper.jpg', id: 6 },
        { src: '../photos/pointRayes.jpg', id: 7 },
        { src: '../photos/lightHousre.jpg', id: 8 },
        { src: '../photos/IndianRoller.jpg', id: 9 },
        { src: '../photos/goldflinch.jpg', id: 10 },
        { src: '../photos/gnotcatcher.jpg', id: 11 },
        { src: '../photos/dumbartonBridge.jpg', id: 12 },
        { src: '../photos/donEdward.jpg', id: 13 }
      ]
    },
    {
      category: 'nature',
      photos: [
        { src: '../photos/bird.jpg', id: 1 },
        { src: '../photos/yosemite.jpg', id: 2 }
      ]
    },
    {
      category: 'bridge',
      photos: [
        { src: '../photos/dumbartonBridge.jpg', id: 12 },
        { src: '../photos/donEdward.jpg', id: 13 }
      ]
    }
  ],
  loadLargeImage: false,
  imageToDisplay: null,
  largeImageSrc: null,
  currentSelectedImageId: 0
};

const galleryReducer = (state = initialState, action) => {
  function findImage(id) {
    console.log(id);
    var findImage = state.photos.find(
      photo => parseInt(photo.id) === parseInt(id)
    );
    return findImage.src;
  }

  switch (action.type) {
    case 'LOAD_LARGE_IMAGE':
      return {
        ...state,
        loadLargeImage: true,
        currentSelectedImageId: action.payload.currentId,
        largeImageSrc: findImage(action.payload.currentId)
      };

    case 'BACKDROP_CLICKED':
      return {
        ...state,
        loadLargeImage: false
      };

    case 'PREVIOUS_CLICKED':
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

    case 'NEXT_CLICKED':
      console.log('next', state.currentSelectedImageId);

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
