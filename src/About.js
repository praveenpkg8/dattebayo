import React from 'react'
import './About.css';
import spotifyLogo from './assets/spotify-logo.png';
import gPodcastLogo from './assets/g-podcast.png';
import applePodcast from './assets/apple-podcast.png';
import anchorFm from './assets/anchor-fm.png';





import AboutContent from './aboutContent.json'


const About = (_, ref) => {
    return (
        <>
            <div ref={ref} className="AboutMainContainer">
                <div className="AbtHeader">
                    <h1>
                        About
                    </h1>
                </div>
                <div className='AbtSecWrapper'>
                    <div className="AbtSec AbtSec-1 AbtSecTile">
                        <h2>
                            {AboutContent.About1.tittle}
                        </h2>
                        <div>
                            <p>
                                {AboutContent.About1.content}
                            </p>
                        </div>
                    </div>
                    <div className="AbtSec AbtSec-2 AbtSecTile2">
                        <h2>
                            {AboutContent.About2.tittle}
                        </h2>
                        <div>
                            <p className='animation-sample'>
                                {AboutContent.About2.content}
                            </p>
                        </div>
                    </div>
                    <div className="AbtSec AbtSec-3 AbtSecTile2">
                        <h2>
                            {AboutContent.About3.tittle}
                        </h2>
                        <div className='platform'>
                            <img
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
                            />
                        </div>
                    </div>
                    <div className="AbtSec  AbtSecTile AbtSec-4">
                        <h2>
                            {AboutContent.About4.tittle}
                        </h2>
                        <div>
                            {AboutContent.About4.content}
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default React.forwardRef(About);