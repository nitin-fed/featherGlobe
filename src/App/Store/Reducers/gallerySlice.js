/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "",
  photosCollection: [],
  showLargeImage: false,
};

const gallerySlice = createSlice({
  name: "gallerySlice",
  initialState,
  reducers: {
    setShowLargeImage(state, action) {
      state.showLargeImage = action.payload;
    },
    fetchGallery(state) {
      // const photoCollectionRef = collection(db, "images");
      // getDocs(photoCollectionRef).then((data) => {
      //   state.photosCollection = data.docs;
      // });
    },
  },
});
export const { fetchGallery, setShowLargeImage } = gallerySlice.actions;
export default gallerySlice.reducer;
