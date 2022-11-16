import React, {useState} from 'react';
import svkLargeLogo from './svkLargeLogo.png';




const LandingPage = () => {
    const [xPost, setX] = useState(0);
    const [yPost, setY] = useState(0);

    const parallaxEffect = (event) => {
        let xPosition = (event.screenX + 100) / 150
        let yPosition = (event.screenY + 100) / 150
        setX(xPosition);
        setY(yPosition);
    }

    return (
        <>
            <div
            onMouseMove={ (e) => parallaxEffect(e)}
            >
                <header className="App-header">
                    <img 
                        className="SvkLargeImage"
                        src={svkLargeLogo}
                        alt="logo"
                        draggable="false"
                        style={{transform: `translateX(${xPost}px) translateY(${yPost}%)`}}
                    />
                    <a
                        className="App-link"
                        href="https://direct.me/schumyvannakaviyangal"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Schummy Vanna Kaviyangal
                    </a>
                </header>
            </div>
        </>
    );
}

export default LandingPage;