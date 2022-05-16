/** @format */

import React from "react";
import { NavLink } from "react-router-dom";

export const ChildNav = () => {
  const linkStyles =
    "mx-1 md:rounded-lg md:border md:border-lime-800 px-3 py-2   hover:bg-lime-700 hover:rounded-lg";

  const tiles = [
    { url: "/demo/posts", displayName: "Posts" },
    { url: "/demo/counter", displayName: "Counter" },

    { url: "/demo/gallery", displayName: "Gallery" },

    { url: "/demo/article", displayName: "Articles" },
    { url: "/demo/support", displayName: "Support" },
    { url: "/demo/galaxy", displayName: "Galaxy" },
    { url: "/demo/jotto", displayName: "Jotto - Jest Practice" },
  ];
  return (
    <>
      <div className='h-10  bo absolute left-0  pt-2 pl-3 mt-2 w-full'>
        {tiles.map((item, index) => {
          return (
            <NavLink
              key={index}
              className={`${linkStyles} hover:underline`}
              to={item["url"]}>
              {item["displayName"]}
            </NavLink>
          );
        })}
      </div>
    </>
  );
};
