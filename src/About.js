import React, { useRef }  from 'react'
import './About.css';

import AboutContent from './aboutContent.json'


const About = (_, ref) => {
    return  (
        <>
        <div ref={ref} className="AboutMainContainer">
            <div className="AbtTittleContainer">
                <h1>
                    About
                </h1>    
            </div>    
            <div className="AbtSectionContainer">
                <div className="AbtSecTop">
                    <div className="AbtSecCont AbtSecCont1">
                        <h2>
                            {AboutContent.About1.tittle}
                        </h2>
                        <div>
                            {AboutContent.About1.content}
                        </div>
                    </div>
                    <div className="AbtSecCont AbtSecCont2">
                        <h2>
                            {AboutContent.About2.tittle}
                        </h2>
                        <div>
                            {AboutContent.About2.content}
                        </div>
                    </div>
                </div>
                <div className='AbtSecBottom'>
                    <div className="AbtSecCont AbtSecCont3">
                        <h2>
                            {AboutContent.About3.tittle}
                        </h2>
                        <div>
                            {AboutContent.About3.content}
                        </div>
                    </div>
                    <div className="AbtSecCont AbtSecCont4">
                        <h2>
                            {AboutContent.About4.tittle}
                        </h2>
                        <div>
                            {AboutContent.About4.content}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    );
}

export default React.forwardRef(About);