import React from "react";
import "../profile.css";

const About = () => {
  return (
    <div className='container main'>

      <div>
        <h3>Nitin Sharma</h3>
        <br />
        <div className="profilePic" />
        <br />

        <div className="description">
          12+ year of extensive experience as a Front End Developer in developing web applications using various technologies including
HTML5, CSS3, JavaScript, jQuery, Object Oriented JavaScript, Backbone JS, ReactJS, ReduxJS, JEST, Node JS, YUI, Kendo UI.
  </div>
        <br />
        <div className='leftAlign'>
          <ul>
            <li>Implementing web design and development principles to build stable software.</li>
            <li>Bringing mockups to life using HTML, CSS, JavaScript.</li>
            <li>Collaborating closely with the team to support projects during all phases of delivery.</li>
            <li>Building websites and apps that are responsive using re-usable components.</li>
            <li>Monitoring website performance and rectifying front-end-related issues.</li>
            <li>Communicating technical issues in an understandable manner to the team and clients.</li>
            <li>Identifying innovative ideas and proof of concepts according to project requirements.</li>
            <li>Providing guidance and troubleshooting support to clients.</li>
            <li>Maintaining an organizing workflow using a project management tool (like GitHub).</li>
            <li>Testing to identify bugs and technical issues before and after deploying.</li>
            <li>Documenting bug reports, tickets, and any code changes.</li>
            <li>Unit testing using JEST and Enzyme</li>
            <li><b>ADA</b> (Americans with Disabilities Act) - experience with ADA compatible web application development</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
