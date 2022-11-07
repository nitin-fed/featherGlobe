/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  currentUser: "Guest User",

  menus: [
    { url: "/", displayName: "Home", imgPath: "home.png" },
    // { url: "/about", displayName: "About", imgPath: "about.png" },
    { url: "/posts", displayName: "Posts", imgPath: "posts.png" },
    {
      url: "/photography",
      displayName: "Photography",
      imgPath: "photography.png"
    },
    { url: "/users", displayName: "Users Management", imgPath: "users.png" },
    // { url: "/demo", displayName: "Practice", imgPath: "practice.png" },
    { url: "/contact", displayName: "Contact", imgPath: "contact.png" },
    { url: "/createPost", displayName: "Create Post", imgPath: "admin.png" },
    { url: "/login", displayName: "Login", imgPath: "login.png" }
  ]
};

const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    updateCurrentUser(state, { payload }) {
      if (payload !== undefined) {
        state.currentUser = payload;
        state.isAuthenticated = true;
        state.menus.pop();
        state.menus.push({
          url: "/profile",
          displayName: "User Profile",
          imgPath: "profile.png"
        });
      } else {
        state.isAuthenticated = false;
        state.menus.pop();
        state.menus.push({
          url: "/login",
          displayName: "Login",
          imgPath: "login.png"
        });
      }
    },
    showHideModal(state, { payload }) {
      const bodyNode = document.querySelector("body");
      state.show = payload;

      payload
        ? bodyNode.setAttribute("class", "overflowHidden")
        : bodyNode.removeAttribute("class");
    }
  }
});

export const { updateCurrentUser } = appSlice.actions;

export default appSlice.reducer;
