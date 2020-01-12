import React from 'react';
import { useEffect, useState } from 'react'
import axios from 'axios'

const Logo = () => {

  const [count, setCount] = useState()


  useEffect( () => {
    const response = axios.get('http://localhost:3001/users');
    response.then( (res) => {
      console.log(res.data)
    })
  })

  return (
    <div className="logo">

      <p></p>

      <img alt="FeatherGlobe" src="../images/globe.gif" className="logo" />
      {/* <div id="header" className="appName" >
                Featherglobe 
            </div>
            <div className="tagline">{"{DECODED FROM NATURE}"}</div> */}
    </div>
  );
};

export default Logo;
