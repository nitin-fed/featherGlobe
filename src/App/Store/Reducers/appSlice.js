/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menus: [
    { url: "/", displayName: "Home", imgPath: "hb1.jpg" },
    { url: "profile", displayName: "Profile", imgPath: "hb2.jpg" },
    { url: "photography", displayName: "Photography", imgPath: "hb3.jpg" },
    { url: "signup", displayName: "Sign Up", imgPath: "hb4.jpg" },
    { url: "users", displayName: "Users Management", imgPath: "hb5.jpg" },
    { url: "demo", displayName: "Demo/Samples", imgPath: "hb6.jpg" },
    { url: "contact", displayName: "Contact", imgPath: "hb7.jpg" },
  ],
};

const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    showHideModal(state, { payload }) {
      const bodyNode = document.querySelector("body");
      state.show = payload;

      payload
        ? bodyNode.setAttribute("class", "overflowHidden")
        : bodyNode.removeAttribute("class");
    },
  },
});

export default appSlice.reducer;
