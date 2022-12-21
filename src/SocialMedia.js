import React from 'react'
import './css/socialMedia.css';

import AboutContent from './aboutContent.json'
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



// const SocialMedia = (_, ref) => {
//     return (
//         <>
//             <div ref={ref} className="socialMediaMainContainer">
//                 <div className="socialMediaHeader">
//                     <h1>
//                         Social Media
//                     </h1>
//                 </div>
//                 <div className='socialMediaSecWrapper'>
//                     <div className=" socialMediaSec-1 ">
//                         <div className="svkLogo">
//                             <img
//                                 className="SvkLargeImage"
//                                 src={svkLargeLogo}
//                                 alt="logo"
//                                 draggable="false"
//                             />
//                         </div>
//                     </div>
//                     <div className="grid-container">

//                         <div class="grid-item">
//                             <a 
//                             href='https://www.instagram.com/haashiraamaa_senju_svk/'
//                             target="_blank"
//                             >
//                             <img
//                                 className="SvkLargeImage"
//                                 src={hashiramalogo}
//                                 alt="logo"
//                                 draggable="false"
//                             />
//                             </a>
//                             <h1 className="avatarText">Hashirama Senju</h1>
//                         </div>
//                         <div class="grid-item">
//                             <a
//                             href='https://www.instagram.com/kisamesvk/'
//                             target="_blank"
//                             >
//                             <img
//                                 className="SvkLargeImage"
//                                 src={kisamelogo}
//                                 alt="logo"
//                                 draggable="false"
//                             />
//                             </a>
//                             <h1 className="avatarText">Kisame</h1>
//                         </div>
//                         <div class="grid-item">
//                             <a
//                             href='https://www.instagram.com/tobiramasenju_svk/'
//                             target='_blank'
//                             >
//                             <img
//                                 className="SvkLargeImage"
//                                 src={tobilogo}
//                                 alt="logo"
//                                 draggable="false"
//                             />
//                             </a>
//                             <h1 className="avatarText">Tobirama Senju</h1>
//                         </div>
//                         <div class="grid-item">
//                             <a
//                             href="https://www.instagram.com/kakashi_hatake_svk/"
//                             target="_blank"
//                             >
//                             <img
//                                 className="SvkLargeImage"
//                                 src={kakashilogo}
//                                 alt="logo"
//                                 draggable="false"
//                             />
//                             </a>
//                             <h1 className="avatarText">Kakashi Hatake</h1>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }


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
                        <img
                            className="imageSize"
                            src={logoSocial}
                            alt="logo"
                            draggable="false"
                        />
                        <img
                            className="imageSize"
                            src={haashiraamaaSocial}
                            alt="logo"
                            draggable="false"
                        />
                    <img
                            className="imageSize"
                            src={tobiSocial}
                            alt="logo"
                            draggable="false"
                        />
                    <img
                            className="imageSize"
                            src={KakashiSocial}
                            alt="logo"
                            draggable="false"
                        />
                    <img
                            className="imageSize"
                            src={kisameSocial}
                            alt="logo"
                            draggable="false"
                        />
                    <img
                            className="imageSize"
                            src={smSocial}
                            alt="logo"
                            draggable="false"
                        />
                </div>
            </div>
        </>
    );
}

export default React.forwardRef(SocialMedia);