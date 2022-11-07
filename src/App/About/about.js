/** @format */

import React from "react";
import { useSelector } from "react-redux";

export const About = () => {
  const { profile } = useSelector((state) => state.profileReducer);

  return (
    <div>
      <div className='flex md:flex-row sm:flex-col '>
        <div className='basis-1/4'>
          <div className=''>
            <img
              src='/images/profilePic.jpg'
              className='rounded-full border-2 border-white drop-shadow-xl my-0 mx-auto'
            />
            <br />
            <ul>
              {profile["contact"].map((item, index) => {
                return (
                  <li key={index} className='py-1'>
                    <img
                      className='h-5 w-5 inline-block mr-5'
                      src={"./images/icons/" + item["imgsrc"]}
                      alt='SVG as an image'
                    ></img>
                    {item["url"] ? (
                      <a
                        className='hover:underline'
                        target='_black'
                        href={item["url"]}
                      >
                        {item["desc"]}{" "}
                      </a>
                    ) : (
                      item["desc"]
                    )}
                  </li>
                );
              })}
            </ul>
            <br />
            <div className='text-xl text-gray-500'>Expertise in</div>

            <ul>
              {profile["skills"].map((item, index) => {
                return <li key={index + ":" + index}>{item}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className='basis-3/4 pl-12'>
          <h3 className='text-4xl pb-8 text-gray-500'>{profile["name"]}</h3>
          <div className=''> {profile["technologies"]}</div>
          <br />
          <div className=' '>
            <ul className='pl-4'>
              {profile["description"].map((item, index) => {
                return (
                  <li className='list-disc pl-4' key={index + "a" + index}>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
