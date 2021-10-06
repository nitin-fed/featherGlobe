import { createSlice } from "@reduxjs/toolkit";

const initialState = { show: false };

const modalSlice = createSlice({
  name: "modalSlice",
  initialState,
  reducers: {
    showHideModal(state, { payload }) {
      const bodyNode = document.querySelector("body");
      state.show = payload;

      payload
        ? bodyNode.setAttribute("class", "overflowHidden")
        : bodyNode.removeAttribute("class");
    }
  }
});

export const { showHideModal } = modalSlice.actions;
export default modalSlice.reducer;
