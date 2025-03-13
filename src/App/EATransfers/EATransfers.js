/** @format */

import React, { useEffect, useState } from "react";

import { Helmet } from "react-helmet";

// import "./styles.css";
// import "./styles_xmas.css";
import BookingForm from "./BookingForm";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Footer from "./Footer";
import { blurBackgroundEAT } from "../Utils/constants";
import { ReactComponent as Phone } from "../../assets/icons/phone.svg";
import { ReactComponent as Email } from "../../assets/icons/email.svg";

export default function EATransfers() {
  const [stylePath, setStylePath] = useState("");
  const [loading, setLoading] = useState(false);

  const [theme, setTheme] = useState("default");

  useEffect(() => {
    // const headTag = document.getElementsByTagName("head");
    const loadStyles = async () => {
      // headTag[0].children[headTag.length].remove();
      setLoading(true);

      try {
        if (theme === "christmas") {
          await import(`../../assets/css/styles_xmas.css`);
        } else if (theme === "newyear") {
          await import(`../../assets/css/styles_newyear.css`);
        } else if (theme === "default") {
          await import(`../../assets/css/styles_default.css`);
        }
      } catch (error) {
        console.error("Error loading CSS: ", error);
      } finally {
        setLoading(false);
        // headTag.appendChild(link);
      }
    };

    loadStyles();
  }, [theme]);

  // useEffect(() => {
  //   var head = document.head;
  //   var link = document.createElement("link");

  //   link.type = "text/html";
  //   link.rel = "stylesheet";
  //   link.href = stylePath;
  //   link.async = true;

  //   head.appendChild(link);

  //   return () => {
  //     head.removeChild(link);
  //   };
  // }, [stylePath]);

  useEffect(() => {
    const head = document.querySelector("head");
    let link = document.getElementById("css-link");
    if (!link) {
      // for first render and ensuring that the link does not already exist
      link = document.createElement("link");
      link.type = "text/html";
      link.id = "css-link";
      link.itemprop = "url";
      link.href =
        theme === "default"
          ? "../../assets/css/styles_default.css"
          : "../../assets/css/styles_xmas.css";
    }

    head.appendChild(link);
  }, [theme]);

  return (
    <>
      {/* <Helmet
        onChangeClientState={() =>
          setTimeout(() => {
            console.log("_____________");
            setLoading(true);
          }, 1000)
        }
      >
        <link
          type='text/css'
          rel='stylesheet'
          href='./../../../public/css/test.css'
        />
        <link
          type='text/css'
          rel='stylesheet'
          href='./../../../public/css/styles_default.css'
        />
      </Helmet> */}

      <>
        <div>
          Select Theme: &nbsp;
          <button kind='primary' onClick={() => setTheme("default")}>
            Default |
          </button>
          <button kind='primary'> &nbsp;New Year | </button>
          <button kind='primary' onClick={() => setTheme("christmas")}>
            &nbsp;Christmas
          </button>
        </div>
        <div className='eatransfers'>
          <div className='main'>
            <header
              className={`customHeader flex px-4 pt-3 sticky top-0 z-40 w-full  ${blurBackgroundEAT}`}
            >
              <div>
                <h2 className='pageTitle text-4xl '>EA Transfers</h2>
              </div>
              <div className='flex-auto text-right topMenu'>
                <a href='#'>Home</a> | <a href='#'>About Us</a> |{" "}
                <a href='#'>Services</a> | <a href='#'>Reviw</a> |{" "}
                <a href='#'>Contact Us</a> | <a href='#'>Login</a>
              </div>
            </header>
            <hr className='w-full absolute left-0' />
            <div className='eatContainer'>
              <div className='px-5 grid grid-cols-2 content-start gap-4 pageBody'>
                <div className='banner'>
                  <div className='phoneBox'>
                    <div className='flex'>
                      <Phone width={20} /> &nbsp; +442080049002 &nbsp;
                      <Email width={20} />
                      &nbsp; info@eatransfers.com
                    </div>
                    <div></div>
                  </div>
                  <div>
                    <div className='typography'>
                      <span className='p1'>Fast</span>
                      <span className='p2'> Convenient</span>

                      <div className='row2'>
                        <span className='p2'>Everywhere</span>
                        <span className='p1'> Anytime</span>
                      </div>
                      <br />
                      <div className='quote'>
                        Ride with ease, arrive with style. Order taxi on the go
                      </div>
                    </div>
                  </div>
                </div>
                <div className='form'>
                  <BookingForm />
                </div>
              </div>

              <div className='eatransfersBody'>
                <AboutUs />
                <br /> <br />
                <Services />
                <br /> <br />
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
