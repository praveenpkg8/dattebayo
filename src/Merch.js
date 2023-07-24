import React from "react";
import "./css/Merch.css";

import URLS from "./urls.json";
import svkLargeLogo from "./svkLargeLogo.png";
import haashiraamaaSocial from "./assets/socialMedia/haashi.png";
import logoSocial from "./assets/socialMedia/logoSocial.png";
import tobiSocial from "./assets/socialMedia/tobi.png";
import KakashiSocial from "./assets/socialMedia/Kakashi.png";
import kisameSocial from "./assets/socialMedia/kisame.png";
import smSocial from "./assets/socialMedia/sm.png";

import kisamelogo from "./assets/kisame_avatar.png";
import tobilogo from "./assets/tobi_avatar.png";
import kakashilogo from "./assets/kakashi_avatar.png";

const Merch = (_, ref) => {
  return (
    <>
    <div className="merchheader">
          <h1>Merchandise</h1>
        </div>
      <div ref={ref} className="MerchMainContainer">
        <div className="merchwrapper">
          <div className="imageSize">
            <h2>Get Vanmamaru</h2>
            <a
              href={URLS.merchImageAssets.eatSleepVanmamRepeat}
              target="_blank"
            >
              <img
                src={URLS.merchURLS.eatSleepVanmamRepeat}
                alt="logo"
                draggable="false"
              />
            </a>
            <p>This is the Content of the card</p>
            <span>Footer Text Goes Here</span>
          </div>
        </div>

        <div className="merchwrapper">
          <div className="imageSize">
            <h2>Get Vanmamaru</h2>
            <a
              href={URLS.merchImageAssets.eatSleepVanmamRepeat}
              target="_blank"
            >
              <img
                src={URLS.merchURLS.eatSleepVanmamRepeat}
                alt="logo"
                draggable="false"
              />
            </a>
            <p>This is the Content of the card</p>
            <span>Footer Text Goes Here</span>
          </div>
        </div>

        <div className="merchwrapper">
          <div className="imageSize">
            <h2>Get Vanmamaru</h2>
            <a
              href={URLS.merchImageAssets.eatSleepVanmamRepeat}
              target="_blank"
            >
              <img
                src={URLS.merchURLS.eatSleepVanmamRepeat}
                alt="logo"
                draggable="false"
              />
            </a>
            <p>This is the Content of the card</p>
            <span>Footer Text Goes Here</span>
          </div>
        </div>

        <div className="merchwrapper">
          <div className="imageSize">
            <h2>Get Vanmamaru</h2>
            <a
              href={URLS.merchImageAssets.eatSleepVanmamRepeat}
              target="_blank"
            >
              <img
                src={URLS.merchURLS.eatSleepVanmamRepeat}
                alt="logo"
                draggable="false"
              />
            </a>
            <p>This is the Content of the card</p>
            <span>Footer Text Goes Here</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.forwardRef(Merch);
