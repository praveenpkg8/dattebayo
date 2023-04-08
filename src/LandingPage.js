import React, { useState } from 'react';

import Navbar from './navbar/Navbar';

import logo from './smallLogo.png';
import svkLandLogo from './landingPageAssets/svkLandLogo.png';
import nightSemiSky from './landingPageAssets/nightSemiSky.png';
import starImg from './landingPageAssets/star.png';
import treeFirst from './landingPageAssets/treeFirst.png';
import treeSecond from './landingPageAssets/treeSecond.png';
import treeThird from './landingPageAssets/treeThird.png';
import backDrop1 from './landingPageAssets/backDrop1.png';
import backDrop2 from './landingPageAssets/backDrop2.png';
import shootingStar from './landingPageAssets/shootingStar.png';




import './LandingPage.css';



const LandingPage = (props) => {

    const { aboutRef, socialMediaRef, advertisementRef, donationRef } = props;
    const [xPost, setX] = useState(0);
    const [yPost, setY] = useState(0);

    const parallaxEffect = (event) => {
        let xPosition = event.screenX
        let yPosition = event.screenY
        setX(xPosition);
        setY(yPosition);
    }

    return (
        <>
            <div className="navbar">
            {/* <Navbar 
            aboutRef={aboutRef}
            socialMediaRef={socialMediaRef}
            advertisementRef={advertisementRef}
            donationRef={donationRef}
            /> */}
            </div>
            
        
            <div
                onMouseMove={(e) => parallaxEffect(e)}
                className="landingMainSection"
            >
                <img
                    className="starImg"
                    src={starImg}
                    alt="logo"
                    draggable="false"
                // style={{ transform: `translateX(${((xPost + 300) / 40)}px) translateY(${((yPost + 300) / 40)}%)` }}
                />
                 <img
                    className="starImg1"
                    src={starImg}
                    alt="logo"
                    draggable="false"
                    style={{ transform: `translateX(${((xPost + 100) / 10)}px) translateY(${((yPost + 100) / 30)}%)` }}

                />
                <img
                    className="nightSemiSky"
                    src={nightSemiSky}
                    alt="logo"
                    draggable="false"
                    // style={{ transform: `translateX(${((xPost + 100) / 150)}px) translateY(${((yPost + 100) / 150)}%)` }}
                />
                <img
                    className="shootingStar"
                    src={shootingStar}
                    alt="logo"
                    draggable="false"
                    style={{ transform: `translateX(${((xPost + 100) / 10)}px) translateY(${((yPost + 100) / 30)}%)` }}
                />
                <img
                    className="treeFirst"
                    src={treeFirst}
                    alt="logo"
                    draggable="false"
                    style={{ transform: `translateX(${((xPost - 75) / 300)}px) translateY(${((yPost + 75) / 300)}%)` }}
                />
                <img
                    className="treeSecond"
                    src={treeSecond}
                    alt="logo"
                    draggable="false"
                    style={{ transform: `translateX(${((xPost - 150) / 200)}px) translateY(${((yPost + 150) / 200)}%)` }}
                />
                <img
                    className="treeThird"
                    src={treeThird}
                    alt="logo"
                    draggable="false"
                    style={{ transform: `translateX(${((xPost + 600) / 400)}px) translateY(${((yPost - 600) / 400)}%)` }}
                />
                <img
                    className="landingMainLogo"
                    src={svkLandLogo}
                    alt="logo"
                    draggable="false"
                    style={{ transform: `translateX(${((xPost - 30) / 60)}px) translateY(${((yPost - 30) / 100)}%)` }}
                />
                <img
                    className="backDrop1"
                    src={backDrop1}
                    alt="logo"
                    draggable="false"
                    style={{ transform: `translateX(${((xPost + 8) / 1750)}px) translateY(${((yPost - 8) / 1750)}%)` }}
                />
                <img
                    className="backDrop2"
                    src={backDrop2}
                    alt="logo"
                    draggable="false"
                    style={{ transform: `translateX(${((xPost + 8) / 1750)}px) translateY(${((yPost - 8) / 1750)}%)` }}
                />
            </div>
            <div className='mobileSection'>
                <img
                    className="mainLogo"
                    src={logo}
                    draggable="false"
                    alt="logo"
                />
            </div>
        </>
    );
}

export default LandingPage;