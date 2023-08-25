import React from "react";
import "./Donation.css";

import button1 from "./bmc1.png";
import button2 from "./ptrn1.png";
import button3 from "./yt1.png";
import {TbCircleDotFilled} from 'react-icons/tb'
import {MdAddShoppingCart} from 'react-icons/md'

const Donation = (_, ref) => {
  return (
    <>
      <div ref={ref}>
        <div class="donationMainContainer">
          <div className="Header_container">
            <span className="AbtHeader">Advertisement</span>
          </div>
          <div class="donationcontainer">
            <div class="box buyMeCoff">
              <span
                className="brndbox brandImg"
               
                alt="logo"
                draggable="false"
              >Buy MeaCoffee</span>
              <div class="perk">
                <h3><TbCircleDotFilled className="perk_dot"/>Perks</h3>
              </div>
              <div className="supportContent supportContentBlack">
                <p>
                  <ul>
                    <li>Support me on a monthly basis</li>
                    <li>Protection from All Iluminati Sadhi</li>
                    <li>Unlock exclusive posts and messages</li>
                    <li>Access to full library</li>
                    <li>Early access</li>
                    <li>Exclusive SVK Stickers And Emojis</li>
                    <li>Sit With Us During Live recording</li>
                  </ul>
                </p>
              </div>
              <div className="supportUs">
                <ui>
                  <a
                    href="https://www.buymeacoffee.com/SVKOfficial"
                    target="_blank"
                    class="btn coffeebtn"
                  >
                    <MdAddShoppingCart className="buy_icon"/>
                    Buy Now
                  </a>
                </ui>
              </div>
            </div>
            <div class="box patreon">
              <span
                className="brndbox brandImg brandImgPatreon"
                alt="logo"
                draggable="false"
              >Patreon</span>
              <div class=" perk">
                <h3><TbCircleDotFilled className="perk_dot"/>Perks</h3>
              </div>
              <div className="supportContent">
                <p>
                 <ul>
                 



                  <li>General Support</li>
                  <li>Protection from All Iluminati Sadhi</li>
                  <li>Exclusive podcast Updates</li>
                  <li>Exclusive SVK Stickers And Emojis</li>
                  <li>Sit With Us During Live recording</li>
                 </ul>
                </p>
              </div>

              <div className="supportUs">
                <ui>
                  <a
                    href="https://www.patreon.com/SchumyVannaKaviyangal"
                    target="_blank"
                    class="btn patbtn"
                  >
                    <MdAddShoppingCart className="buy_icon"/>
                    Buy Now
                  </a>
                </ui>
              </div>
            </div>
            <div class="box youtube">
              <span
                className="brndbox brandImg"
                alt="logo"
                draggable="false"
              >YouTube</span>
              <div class="perk">
                
                <h3> <TbCircleDotFilled className="perk_dot"/>  Perks</h3>
              </div>
              <div className="supportContent">
                <p>
             <ul>
              <li>Loyalty badges next to your name in comments and live chat</li>
             <li>Custom emoji to use in comments and live chat</li>
             <li>Priority reply to comments</li>
             <li>Photos and status updates</li>
             <li>Exclusive members-only videos</li>
             <li>Early access to new videos</li>
             <li>Member shout-outs</li>
             <li>Discounted merchandise</li>
             <li>Virtual video collaborations</li>
             <li>Gameplay with you</li>
             </ul>
                </p>
              </div>
              <div className="supportUs">
                <ui>
                  <a
                    href="https://www.youtube.com/c/SchumyVannakaviyangalOfficial"
                    target="_blank"
                    class="btn ytbtn"
                  >
                    <MdAddShoppingCart className="buy_icon"/>
                    Buy Now
                  </a>
                </ui>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.forwardRef(Donation);
