import React from 'react'
import './Advertisement.css';
import labels from '../../labels';


const Advertisement_ = (_, ref) => {
    return (
        <>
        <div>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe0Y50upUUP4ekI-QKLhm6gjhaL5jDDsLy02GookmL8PsYgTw/viewform?embedded=true" width="300" height="650" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
            <div ref={ref} className="AdvMainContainer">
                <div className="AdvHeader">
                    <h1>
                    {labels.advertisementLabel.title}
                    </h1>
                    <p className='AdvTitleContent'>{labels.advertisementLabel.titleContent}</p>
                    <div className='AdvContent'>{labels.advertisementLabel.advConent}</div>
                </div>
                <div className='AdvFormMain'>

                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe0Y50upUUP4ekI-QKLhm6gjhaL5jDDsLy02GookmL8PsYgTw/viewform?embedded=true" width="500" height="700" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                    
                {/* <form className='AdvForm'>
                    <p className='AdvFormLabel'>{labels.advertisementLabel.formTitle}</p> 
                    <p className='AdvFormContent'>{labels.advertisementLabel.formContent}</p>
                    <div className='AdvFormField'>
                        <label>{labels.advertisementLabel.formName}</label>
                        <input type='text'/>
                        <br />
                        <label>{labels.advertisementLabel.formEmail}</label>
                        <input type='text'/>
                        <br />
                        <label>{labels.advertisementLabel.formPhone}</label>
                        <input type='number'/>
                        <br />
                        <label>{labels.advertisementLabel.formInsta}</label>
                        <input type='text'/>
                        <br />
                        <label>{labels.advertisementLabel.formFb}</label>
                        <input type='text'/>
                        <br />
                        <label>{labels.advertisementLabel.formAd1}</label>
                        <input type='text'/>
                        <br />
                        <label>{labels.advertisementLabel.formAd2}</label>
                        <input type='text'/>
                        <br />
                        <label>{labels.advertisementLabel.formAd3}</label>
                        <input type='text'/>
                        <br />    
                    </div>
                    <button type='submit'>{labels.advertisementLabel.formsubmit}</button>   
                </form> */}
                </div>
            </div>


        </>
    );
}

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
                        <div className=''>
                            {labels.advertisementLabel.advConent}
                        </div>
                    </div>
                </div>
                
            </div>


        </>
    );
}

export default React.forwardRef(Advertisement);