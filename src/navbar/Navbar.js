import React from 'react';
import logo from '../logo.png';
import '../css/Navbar.css';



const Navbar = () => {
    return (
        <>
        <div className="Navbar">
            <div>Navbar</div>
            <div>Navbar</div>
            <div>
                <img 
                src={logo} 
                draggable="false" 
                alt="logo" 
                />
            </div>
            <div>Navbar</div>
            <div>Navbar</div>
            </div>
        </>
    )
}

export default Navbar