import React from 'react';
// import './Donate.css';
import './Donation.css';

import button1 from './bmc1.png';
import button2 from './ptrn1.png';
import button3 from './yt1.png';

const Donation = () => {
  return (
    <>

      <div class="donationMainContainer">
        <div class="donationHeader">
          <h1>DONATIONS</h1>
        </div>
        <div class="donationcontainer">
          <div class="box buyMeCoff">
            <img
              className="brndbox brandImg"
              src={button1}
              alt="logo"
              draggable="false"
            />
            <div class="perk">
              <h3>Perks</h3>
            </div>
            <div className='supportContent'>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
              </p>
            </div>
            <div
              className='supportUs'
            >
              <ui>
                <a href="https://www.buymeacoffee.com/SVKOfficial" class="btn coffeebtn">Buy Now</a>
              </ui>
            </div>
          </div>
          <div class="box patreon">
            <img
              className="brndbox brandImg "
              src={button2}
              alt="logo"
              draggable="false"
            />
            <div class=" perk">
              <h3>Perks</h3>
            </div>
            <div className='supportContent'>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
              </p>
            </div>

            <div
              className='supportUs'
            >
              <ui>
                <a href="https://www.patreon.com/SchumyVannaKaviyangal" class="btn patbtn">Buy Now</a>
              </ui>
            </div>
          </div>
          <div class="box youtube">
            <img
              className="brndbox brandImg"
              src={button3}
              alt="logo"
              draggable="false"
            />
            <div class="perk">
              <h3>Perks</h3>
            </div>
            <div className='supportContent'>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
              </p>
            </div>
            <div
              className='supportUs'
            >
              <ui>
                <a href="https://www.youtube.com/c/SchumyVannakaviyangalOfficial" class="btn ytbtn">Buy Now</a>
              </ui>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Donation