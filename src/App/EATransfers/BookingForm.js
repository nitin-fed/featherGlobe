

import React from "react";
import { ReactComponent as Map } from "./icons/map.svg";
import { ReactComponent as Flag } from "./icons/flag.svg";
import { ReactComponent as Calender } from "./icons/calender.svg";
import { ReactComponent as Clock } from "./icons/clock.svg";
import { ReactComponent as Numbers } from "./icons/numbers.svg";

export default function BookingForm() {
  return (
    <div className='tabsContainer'>
      <form action='submit'>
        <div>
          <div class='flex px-3 gap-4'>
            <button className=' tabs activeTab'>Transfer</button>
            <button className=' tabs inActiveTab'>Hourly</button>
          </div>
        </div>

        <div className='transferFormComponents'>
          <div className='flex'>
            <Map width={24} />
            <input type='text' placeholder='Pick Up - Location/Address' />
          </div>
          <div className='flex'>
            <Flag width={24} />
            <input type='text' placeholder='Drop Off - Location/Address' />
            <button type='button' className='viaButton'>
              Via
            </button>
          </div>
          <div className='flex'>
            <Calender width={24} /> <input type='text' placeholder='Date' />
          </div>
          <span className='flex'>
            <div className='flex' style={{ margin: "2px 10px" }}>
              <Clock width={24} />
              <input type='text' placeholder='HH' />
            </div>

            <div className='flex' style={{ margin: "2px 10px" }}>
              <Clock width={24} />
              <input type='text' placeholder='MM' />
            </div>
          </span>
          <div className='flex'>
            <Numbers width={24} />{" "}
            <input type='text' placeholder='No. of Passengers' />
          </div>

          <div className='buttonBox'>
            <button className='resetButton'>Reset</button> &nbsp;&nbsp;
            <button className='submitButton'>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}
