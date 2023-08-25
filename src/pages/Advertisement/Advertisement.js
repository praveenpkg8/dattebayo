import React from 'react'
import './Advertisement.css';
import labels from '../../labels';


const Advertisement = (_, ref) => {
    return (
        <>
            <div ref={ref} className="AdvrtMainCotainer">
            <div className="Header_container">
        <span className="AbtHeader">Advertisement</span>
      </div>
                <div className='AdvrtSecWrapper'>
                    <div className='AdvrtSec-1'>
                        <iframe
                        className='responsive_iframe' src="https://docs.google.com/forms/d/e/1FAIpQLSfugxrPeefHevkflFjl6AK1gdtO4-lD8CKTV2TOI2-z0IQOpw/viewform?embedded=true" width="640" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                    </div>
                    <div className='AdvrtSec-2'>
                        <h2>
                            {labels.advertisementLabel.titleContent}
                        </h2>
                        <div className='AdvrtMessage'>
                            <p>
                                {labels.advertisementLabel.advConent}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default React.forwardRef(Advertisement);