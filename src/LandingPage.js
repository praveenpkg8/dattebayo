import React, { useState } from 'react';

import svkLandLogo from './landingPageAssets/svkLandLogo.png';
import nightSemiSky from './landingPageAssets/nightSemiSky.png';
import starImg from './landingPageAssets/star.png';
import treeFirst from './landingPageAssets/treeFirst.png';




import './LandingPage.css';



const LandingPage = () => {
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
                    className="nightSemiSky"
                    src={nightSemiSky}
                    alt="logo"
                    draggable="false"
                    style={{ transform: `translateX(${((xPost + 100) / 150)}px) translateY(${((yPost + 100) / 150)}%)` }}
                />
                <img
                    className="treeFirst"
                    src={treeFirst}
                    alt="logo"
                    draggable="false"
                    style={{ transform: `translateX(${((xPost - 75) / 300)}px) translateY(${((yPost + 75) / 300)}%)` }}
                /> 
               
                <img
                    className="landingMainLogo"
                    src={svkLandLogo}
                    alt="logo"
                    draggable="false"
                    style={{ transform: `translateX(${((xPost - 30) / 60)}px) translateY(${((yPost - 30) / 100)}%)` }}
                />
                

            </div>
        </>
    );
}

export default LandingPage;