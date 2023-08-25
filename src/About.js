import React from "react";
import "./About.css";
import spotifyLogo from "./assets/spotify-logo.png";
import gPodcastLogo from "./assets/g-podcast.png";
import applePodcast from "./assets/apple-podcast.png";
import anchorFm from "./assets/anchor-fm.png";

import { FaSpotify } from "react-icons/fa";
import { SiGooglepodcasts } from "react-icons/si";
import { PiApplePodcastsLogoFill } from "react-icons/pi";
import { BsDiscord, BsReddit } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoFacebookSquare } from "react-icons/bi";
import{FaTwitterSquare} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'

import AboutContent from "./aboutContent.json";
import { icons } from "react-icons";

const About = (_, ref) => {
  return (
    <>
      <div ref={ref} className="AboutMainContainer">
        <div className="Header_container">
          <span className="AbtHeader">About</span>
        </div>
        <div className="AbtSecWrapper">
          <div className="AbtSec AbtSec-1 AbtSecTile">
            <h2>{AboutContent.About1.tittle}</h2>
            <div>
              <p>{AboutContent.About1.content}</p>
            </div>
          </div>
          <div className="AbtSec AbtSec-2 AbtSecTile2">
            <h2>{AboutContent.About2.tittle}</h2>
            <div>
              <p className="contact_logo">
                <a href="https://www.instagram.com/schumyvannakaviyangalofficial/" target="_blank">
                  <AiFillInstagram className="connect_logo_ig" />
                </a>
                <a href="https://www.youtube.com/@SchumyVannakaviyangalOfficial" target="_blank">
                  <FaYoutube className="conect_logo_yt" />
                </a>
                <a href="" target="_blank">
                  <BsDiscord className="connect_icons_discord" />
                </a>
                <a href="https://www.facebook.com/schumyVannakaviyangalofficial/" target="_blank">
                  <BiLogoFacebookSquare className="connect_logo_fb" />
                </a>
                <a href="https://twitter.com/Schumy_Official" target="_blank">
                  <FaTwitterSquare className="connect_logo_twitter" />
                </a>
                <a href="https://www.reddit.com/r/SchumyVKofficial/" target="_blank">
                  <BsReddit className="conect_logo_reddit" />
                </a>
              </p>
            </div>
          </div>
          <div className="AbtSec AbtSec-3 AbtSecTile2">
            <h2>{AboutContent.About3.tittle}</h2>
            <div className="platform">
              <FaSpotify className="spotifyLogo" alt="logo" draggable="false" />
              <SiGooglepodcasts
                className="gPodcastLogo"
                alt="logo"
                draggable="false"
              />
              <PiApplePodcastsLogoFill
                className="applePodcast"
                alt="logo"
                draggable="false"
              />
              {/* <img
                                className="spotifyLogo jiggle-element"
                                src={spotifyLogo}
                                alt="logo"
                                draggable="false"
                            />
                            <img
                                className="gPodcastLogo"
                                src={gPodcastLogo}
                                alt="logo"
                                draggable="false"
                            />
                            <img
                                className="applePodcast"
                                src={applePodcast}
                                alt="logo"
                                draggable="false"
                            />
                            <img
                                className="anchorFm"
                                src={anchorFm}
                                alt="logo"
                                draggable="false"
                            /> */}
            </div>
          </div>
          <div className="AbtSec  AbtSecTile AbtSec-4">
            <h2>{AboutContent.About4.tittle}</h2>
            <div>{AboutContent.About4.content}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.forwardRef(About);
