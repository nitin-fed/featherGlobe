/** @format */

import React from "react";

import { useSelector } from "react-redux";

const Contact = () => {
  const { profile } = useSelector((state) => state.profileReducer);

  return (
    <ul>
      {profile["contact"].map((item, index) => {
        return (
          <li key={`contact${index}`} className='py-1'>
            <img
              className='h-5 w-5 inline-block mr-5'
              src={"./images/icons/" + item["imgsrc"]}
              alt='SVG as an image'></img>
            {item["url"] ? (
              <a href={item["url"]}>{item["desc"]} </a>
            ) : (
              item["desc"]
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Contact;
