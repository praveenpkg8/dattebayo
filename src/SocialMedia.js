import React from 'react'
import './css/socialMedia.css';

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




const SocialMedia = (_, ref) => {
    return (
        <>
            <div ref={ref} className="socialMediaMainContainer">
                <div className='socialMediaHeader'>
                    <h1>
                        Social Media
                    </h1>
                </div>
                <div className='socialMediaSecWrapper'>
                    <div
                        className="imageSize"
                    >
                        <a 
                            href={URLS.socialMediaURLS.svk}
                            target="_blank"
                        >
                        <img
                            src={logoSocial}
                            alt="logo"
                            draggable="false"
                        />
                        </a>
                        
                    </div>
                    <div
                        className="imageSize"
                    >
                        <a 
                            href={URLS.socialMediaURLS.haashiraamaa}
                            target="_blank"
                        >
                        <img
                            src={haashiraamaaSocial}
                            alt="logo"
                            draggable="false"
                        />
                        </a>
                        
                    </div>
                    <div
                        className="imageSize"
                    >
                        <a 
                            href={URLS.socialMediaURLS.tobirama}
                            target="_blank"
                        >
                        <img
                            src={tobiSocial}
                            alt="logo"
                            draggable="false"
                        />
                        </a>
                    </div>
                    <div
                        className="imageSize"
                    >
                        <a 
                            href={URLS.socialMediaURLS.kakashi}
                            target="_blank"
                        >
                        <img
                            src={KakashiSocial}
                            alt="logo"
                            draggable="false"
                        />
                        </a>
                    </div>
                    <div
                        className="imageSize"
                    >
                        <a 
                            href={URLS.socialMediaURLS.kisamae}
                            target="_blank"
                        >
                        <img
                            src={kisameSocial}
                            alt="logo"
                            draggable="false"
                        />
                        </a>
                    </div>
                    <div
                        className="imageSize"
                    >
                        <a 
                            href={URLS.socialMediaURLS.spaceMonkeys}
                            target="_blank"
                        >
                        <img
                            src={smSocial}
                            alt="logo"
                            draggable="false"
                        />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default React.forwardRef(SocialMedia);