

import React from "react";

export default function Footer() {
  return (
    <>
      <div className='footer'>
        <h1 className='text-4xl py-4'>Popular Transfers</h1>

        <div class='grid grid-cols-4 gap-4'>
          <div>
            <h2 className='text-2xl py-4'>Hotel Transfers</h2>

            <p>
              <a href='#'>Hard Rock Hotel London To Knaresborough</a>
            </p>
            <p>
              <a href='#'>Hotel Cafe Royal London To Hexham</a>
            </p>
            <p>
              <a href='#'>Apex Temple Court Hotel To SS9 Leigh On Sea</a>
            </p>
            <p>
              <a href='#'>Sofitel London St James To Wylam</a>
            </p>
          </div>
          <div className='...'>
            <h2 className='text-2xl py-4'>Airport</h2>

            <p>
              <a href='#'>Dover Cruise Port To TN28 New Romney</a>
            </p>
            <p>
              <a href='#'>Tilbury Cruise Port To Woolacombe</a>
            </p>
            <p>
              <a href='#'>Southampton Ocean Cruise Terminal To Cheltenham</a>
            </p>
            <p>
              <a href='#'>Portsmouth Cruise Port To Cheltenham</a>
            </p>
          </div>
          <div className='...'>
            <h2 className='text-2xl py-4'>Hotel Transfers</h2>

            <p>
              <a href='#'>Hotel Cafe Royal London To DA9 Greenhithe</a>
            </p>
            <p>
              <a href='#'>Hotel Sofitel London Heathrow To TN19 Etchingham</a>
            </p>
            <p>
              <a href='#'>Sofitel London St James To N6 Highgate</a>
            </p>
            <p>
              <a href='#'>Apex Temple Court Hotel To Clevedon</a>
            </p>
          </div>
          <div className=' '>
            <h2 className='text-2xl py-4'>London Transfers</h2>

            <p>
              <a href='#'>SW20 West Wimbledon To Diss</a>
            </p>
            <p>
              <a href='#'>RG1 Reading To Brighouse</a>
            </p>
            <p>
              <a href='#'>KT17 Epsom To N4 Finsbury Park</a>
            </p>
            <p>
              <a href='#'>ASE25 South Norwood To EN4 Barnet</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
