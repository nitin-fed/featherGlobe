import React from "react";
import "../profile.css";
import { useSelector } from "react-redux";

const About = () => {
  const { profile } = useSelector(state => state.profileReducer);
  console.log(profile);
  return (
    <div className="container main">
      <div>
        <h3 className="centerAlign">{profile["name"]}</h3>

        <div className="profilePic" />

        <div className="description"> {profile["technologies"]}</div>

        <div className="leftAlign expertise">
          <ul>
            {profile["description"].map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
