import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: {
    name: "Nitin Sharma",
    technologies:
      "12+ year of extensive experience as a Front End Developer in developing web applications using various technologies including HTML5, CSS3, JavaScript, jQuery, Object Oriented JavaScript, Backbone JS, ReactJS, ReduxJS, JEST, Node JS, YUI, Kendo UI.",
    description: [
      "Implementing web design and development principles to build stable software.",
      "Bringing mockups to life using HTML, CSS, JavaScript.",
      "Collaborating closely with the team to support projects during all phases of delivery.",
      "Building websites and apps that are responsive using re-usable components.",
      "Monitoring website performance and rectifying front-end-related issues.",
      "Communicating technical issues in an understandable manner to the team and clients.",
      "Identifying innovative ideas and proof of concepts according to project requirements.",
      "Providing guidance and troubleshooting support to clients.",
      "Maintaining an organizing workflow using a project management tool (like GitHub).",
      "Testing to identify bugs and technical issues before and after deploying.",
      "Documenting bug reports, tickets, and any code changes.",
      "Unit testing using JEST and Enzyme",
      "ADA (Americans with Disabilities Act) - experience with ADA compatible web application development]"
    ]
  }
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    showHideModal(state, { payload }) {}
  }
});

//export const { showHideModal } = modalSlice.actions;
export default profileSlice.reducer;
