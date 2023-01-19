import React from 'react'
import './Advertisement.css';
import labels from '../../labels';


const Advertisement = (_, ref) => {
    return (
        <>
            <div ref={ref} className="AdvMainContainer">
                <div className="AdvHeader">
                    <h1>
                    {labels.advertisementLabel.title}
                    </h1>
                    <p className='AdvTitleContent'>{labels.advertisementLabel.titleContent}</p>
                    <div className='AdvContent'>{labels.advertisementLabel.advConent}</div>
                </div>
                <div className='AdvFormMain'>
                <form className='AdvForm'>
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
                </form>
                </div>
            </div>


        </>
    );
}

export default React.forwardRef(Advertisement);