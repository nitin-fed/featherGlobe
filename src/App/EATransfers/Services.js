/** @format */

import React from "react";
import img1 from "../../assets/eat/img_1.png";

export default function Services() {
  return (
    <div className='aboutus'>
      <div>
        <h1 className='text-4xl'>Service</h1>
      </div>
      <div className='flex my-8'>
        <div>
          <img
            className='imagesWrapped imagesWrappedRight'
            alt='test'
            src={img1}
          />
          <h2 className='text-2xl'>
            Smooth Stansted Airport Transfer Service with Ea Transfer.
          </h2>
          <p>
            When it comes to air travel, having a reliable and efficient airport
            transfer service is essential. One such company that has garnered a
            reputation for providing top-notch services is England Airport
            Transfer. In this article, we will explore the convenience and
            benefits of using England Airport Transfer for your Stansted
            transfer needs.
          </p>
          <p>
            If you're planning a trip to or from Stansted Airport, you'll likely
            be searching for a reliable and convenient transfer service.
            Stansted Airport, located in Essex, England, is one of the busiest
            airports in the United Kingdom, serving millions of passengers each
            year. To ensure a smooth and hassle-free journey, many travellers
            opt for a dedicated Stansted airport transfer service. Let's explore
            why choosing a professional transfer service for your Stansted
            airport transfers is a wise decision.
          </p>
          <p>
            <a href='#'>Read More...</a>
          </p>
        </div>
      </div>
    </div>
  );
}
