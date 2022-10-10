/** @format */
import React from "react";

export default function ToggleButton({ label, checked }) {
  return (
    <>
      <div className='relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in'>
        <input
          // checked={checked}
          type='checkbox'
          className='toggle-checkbox absolute w-5 h-5  rounded-full bg-white border-4 appearance-none cursor-pointer'
        />
        <label className='block overflow-hidden h-5 rounded-full border border-gray-400 cursor-pointer '></label>
      </div>
      <label className='text-xs'>{label}</label>
    </>
  );
}
