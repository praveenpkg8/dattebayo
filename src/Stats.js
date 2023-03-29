import React from 'react';
import './css/Stats.css';
const Stat = () => {
    return (
        <>
            <div className='StatMainContainer'>
                <div className='StatHeader'>
                    <h1>Stats</h1> 
                </div>
                <div className='StatSecWrapper'>
                    <div className='StatSec-1'>
                        <h2>
                            Total Views
                        </h2>
                        <div>
                            7000000
                        </div>
                    </div>
                    <div className='StatSec-2'>
                        <h2>
                            Active Listeners
                        </h2>
                        <div>
                            2000000
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Stat