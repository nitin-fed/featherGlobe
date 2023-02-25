/** @format */

import React from "react";
import { useSelector } from "react-redux";
import prifilePic from "../../App/assets/images/profilePic.jpg";

export const About = () => {
  const { profile } = useSelector((state) => state.profileReducer);

  return (
    <div>
      <div className='md:flex '>
        <div className='md:basis-1/4 sm:w-full mb-8'>
          <div className=''>
            <h3 className='text-4xl pb-8 text-gray-500 text-center md:hidden lg:hidden '>
              {profile["name"]}
            </h3>
            <img
              src={prifilePic}
              className='rounded-full border-2 border-white drop-shadow-xl my-0 mx-auto'
            />
            <br />
            <ul>
              {profile["contact"].map((item, index) => {
                return (
                  <li key={index} className='py-1'>
                    <img
                      className='h-5 w-5 inline-block mr-3'
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
        <div className='md:basis-3/4 md:pl-12 sm:pl-0  sm:w-full'>
          <h3 className='text-4xl pb-8 text-gray-500  sm:text-center md:text-left  xs:hidden sm:hidden md:block lg:block'>
            {profile["name"]}
          </h3>
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
