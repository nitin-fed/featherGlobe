

import React, { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/agate.css";

import { useLocation, useNavigate } from "react-router-dom";

import "highlight.js/styles/agate.css";

//import javascript from "highlight.js/lib/languages/javascript";
import { primaryButtonStyle } from "../../Utils/constants";

export function Post() {
  const location = useLocation();
  const history = useNavigate();

  // const html = hljs.highlightAuto(location.state["desc"]).value;

  useEffect(() => {
    var allPre, i, j;
    allPre = document.getElementsByTagName("pre");
    for (i = 0, j = allPre.length; i < j; i++) {
      hljs.highlightBlock(allPre[i]);
    }
  });

  return (
    <>
      <div className='text-right '>
        <button
          onClick={() => {
            history("/posts");
          }}
          className={`${primaryButtonStyle}`}
        >
          Back to All Posts
        </button>
      </div>
      {/* <h1 className='text-3xl py-2'>All Posts</h1> */}
      <div className=' p-4 border border-gray my-4'>
        <div className='grid grid-flow-row-dense grid-cols-2'>
          <h3 className=' text-2xl postTitle py-2'>
            {location.state["title"]}
          </h3>

          <span className='text-right my-2 text-sm'>
            {location.state["date"]}
          </span>
        </div>
        <div
          className='post'
          dangerouslySetInnerHTML={{ __html: location.state["desc"] }}
        ></div>
      </div>
      {/* <button className={`${primaryButtonStyle} float-right`}>Edit</button>ch */}
      <button className={`${primaryButtonStyle} float-right`}>
        Add Comment
      </button>

      <br />
      <br />
    </>
  );
}
