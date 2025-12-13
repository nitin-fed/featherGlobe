/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: {
    name: "Nitin Sharma",
    technologies:
      "15+ year of extensive experience as a Front End Developer. Developing and maintaining web applications using various UI tools and technologies. Experience in driving projects forward as the development team leader, facilitating projects from concept to launch. Passionate about learning and development with a desire to apply skills with a larger development team. Eager to tackle more complex  problems and continue to find ways to maximize user efficiency.",
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
      "ADA (Americans with Disabilities Act) - experience with ADA compatible web application development]",
    ],
    skills: [
      "Object Oriented JavaScript",
      "TypeScript",
      "React, React Native",
      "Redux / Redux Toolkit",
      "HTML5, Webpack 5",
      "Micro Front End (MFE)",
      "Jenkins and CICD",
      "JEST/React Testing Library",
      "Bootstrap",
      " Material UI",
      "CSS 3, Tailwind CSS",
      "Splunk and PostMan",
      "ASP.Net, MS SQL Server",
    ],
    contact: [
      {
        type: "email",
        imgsrc: "email.svg",
        desc: "nitin@featherglobe.com",
        url: "mailto:nitin@featherglobe.com",
      },
      // { type: "phone", imgsrc: "phone.svg", desc: "+1 510 857 9536" },
      { type: "location", imgsrc: "location.svg", desc: "CA - USA" },
      {
        type: "site",
        imgsrc: "web.svg",
        desc: "featherGlobe",
        url: "http://www.featherglobe.com",
      },
      {
        type: "linkedin",
        imgsrc: "linkedin.svg",
        desc: "LinkedIn",
        url: "http://www.linkedin.com/in/featherglobe",
      },
      {
        type: "git",
        imgsrc: "git.svg",
        desc: "GitHub",
        url: "http://www.github.com/nitin-fed",
      },
      {
        type: "flikr",
        imgsrc: "flikr.svg",
        desc: "Flickr",
        url: "https://www.flickr.com/photos/154195298@N06/",
      },
    ],
  },
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    showHideModal(state, { payload }) {},
  },
});

//export const { showHideModal } = modalSlice.actions;
export default profileSlice.reducer;
