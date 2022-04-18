/** @format */

import React from "react";

const App = () => {
  const tiles = [
    { url: "posts", displayName: "Posts" },
    { url: "counter", displayName: "Counter" },

    { url: "gallery", displayName: "Gallery" },

    { url: "article", displayName: "Articles" },
    { url: "support", displayName: "Support" },
    { url: "jotto", displayName: "Jotto - Jest Practice" },
  ];
  return (
    <>
      <div className='bodyContents'>
        {tiles.map((item) => {
          return <div>{item["displayName"]}</div>;
        })}
      </div>
    </>
  );
};

export default App;
