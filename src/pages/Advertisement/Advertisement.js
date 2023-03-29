import React from 'react'
import './Advertisement.css';
import labels from '../../labels';


const Advertisement = (_, ref) => {
    return (
        <>
            <div ref={ref} className="AdvrtMainCotainer">
                <div className="AdvrtHeader">
                    <h1>
                    {labels.advertisementLabel.title}
                    </h1>
                </div>
                <div className='AdvrtSecWrapper'>
                    <div className='AdvrtSec-1'>
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe0Y50upUUP4ekI-QKLhm6gjhaL5jDDsLy02GookmL8PsYgTw/viewform?embedded=true" width="70%" height="100%" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                    </div>
                    <div className='AdvrtSec-2'>
                        <h2>
                            {labels.advertisementLabel.titleContent}
                        </h2>
                        <div>
                            {labels.advertisementLabel.advConent}
                        </div>
                    </div>
                </div>
                
            </div>


        </>
    );
}

export default React.forwardRef(Advertisement);