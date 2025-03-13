/** @format */

import React from "react";
import image1 from "../../assets/eat/img_0.png";

export default function AboutUs() {
  return (
    <div className='aboutus'>
      <div>
        <h1 className='text-4xl'>About Us</h1>
      </div>
      <div className='flex my-8'>
        <div>
          <img className='imagesWrapped' alt='test' src={image1} />

          <h2 className='text-2xl'>For a passenger's safer journey. </h2>
          <p>
            England Airport Transfers provides the most excellent Airport
            Transfer and minicab Transportation services to and from all key UK
            airports and sea ports. We offer our services 24 hours a day, 7 days
            a week to make available the highest convenience to our customers.
            Our fixed pricing model for our Airport transfer services is very
            affordable and predictable as there are no hidden fees or costs. Our
            Airports and sea ports services easy to get accurate price quotes on
            our www.eat.com website which are guaranteed to be of the highest
            quality.
          </p>
          <p>
            Our Airport transport services include transfer to and from: London
            Gatwick, London Stansted, London Luton, and London Heathrow Airports
            as well as all major sea ports. We also provide transfer to and from
            all major train stations, hotels, and other locations in major
            cities within the UK.
          </p>
          <p>
            Through the contribution of a large variety of different transport
            services, we provide the comprehensive transport solution that you
            are looking for so that you can enjoy your every trip with us. We
            also make sure to treat all of our customers professionally by
            having our drivers be well dressed, our cars clean, and our cars
            outfitted with the latest transport technology to ensure accurate
            arrivals and pickups.
          </p>
          <p>
            Here at England Airport Transfers, we require all bookings to be
            made in advance to provide the best quality service possible. By
            booking 24 hours in advance, we can ensure that we will be there to
            greet you are your arrival or pickup destination on time so that
            your trip will go smoothly.
          </p>

          <div className='address'>
            <strong>Company Address</strong>
            <p>S V Transport Ltd London </p>
            <p>Phone: +44 (208) 004 9002 </p>
            <p>WhatsApp: +4475110030 </p>
            <p>Website: www.eatransfer.com </p>
            <p>Email: info@eatransfer.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
