/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: true,
  menus: [
    { url: "/", displayName: "Home", imgPath: "home.png" },
    { url: "/profile", displayName: "Profile", imgPath: "profile.png" },
    {
      url: "/photography",
      displayName: "Photography",
      imgPath: "photography.png",
    },
    { url: "/signup", displayName: "Sign Up", imgPath: "signUp.png" },
    { url: "/users", displayName: "Users Management", imgPath: "users.png" },
    { url: "/demo", displayName: "Practice", imgPath: "practice.png" },
    { url: "/contact", displayName: "Contact", imgPath: "contact.png" },
    { url: "/admin", displayName: "Admin", imgPath: "contact.png" },
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
