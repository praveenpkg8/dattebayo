import React from 'react'
import './css/Merch.css';

import URLS from './urls.json'
import svkLargeLogo from './svkLargeLogo.png';
import haashiraamaaSocial from './assets/socialMedia/haashi.png';
import logoSocial from './assets/socialMedia/logoSocial.png';
import tobiSocial from './assets/socialMedia/tobi.png';
import KakashiSocial from './assets/socialMedia/Kakashi.png';
import kisameSocial from './assets/socialMedia/kisame.png';
import smSocial from './assets/socialMedia/sm.png';



import kisamelogo from './assets/kisame_avatar.png';
import tobilogo from './assets/tobi_avatar.png';
import kakashilogo from './assets/kakashi_avatar.png';




const Merch = (_, ref) => {
    return (
        <>
            <div ref={ref} className="MerchMainContainer">
                <div className='socialMediaHeader'>
                    <h1>
                        Merchandise
                    </h1>
                </div>
                <div className='socialMediaSecWrapper'>
                    <div
                        className="imageSize"
                    >
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
                        
                    </div>
                   
                </div>
            </div>
            <div className='card-container'>
            <div class="card">
                <h2 class="card-title">Get Vanmamaru</h2>
                <div
                        className="imageSize"
                    >
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
                        
                    </div>
                <p class="card-content">This is the content of the card.</p>
                <p class="card-footer">Footer text goes here.</p>
            </div>
            <div class="card">
                <h2 class="card-title">Card Title</h2>
                <p class="card-content">This is the content of the card.</p>
                <p class="card-footer">Footer text goes here.</p>
            </div>
            <div class="card">
                <h2 class="card-title">Card Title</h2>
                <p class="card-content">This is the content of the card.</p>
                <p class="card-footer">Footer text goes here.</p>
            </div>
            <div class="card">
                <h2 class="card-title">Card Title</h2>
                <p class="card-content">This is the content of the card.</p>
                <p class="card-footer">Footer text goes here.</p>
            </div>
            </div>
        </>
    );
}

export default React.forwardRef(Merch);