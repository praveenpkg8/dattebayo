import React from 'react';
import logo from '../logo.png';
import '../css/Navbar.css';


const scrollToSection = (reference) => {
    reference.current.scrollIntoView({ block: 'start', behavior: 'smooth' });
}

const Navbar = React.forwardRef((props, _) => {
    const { aboutRef, socialMediaRef, advertisementRef, donationRef } = props;

    return (
        <>
            <div className="Navbar">
                <div className="navButton"
                    onClick={() => scrollToSection(aboutRef)}
                >About</div>
                <div className="navButton"
                    onClick={() => scrollToSection(socialMediaRef)}
                >Social Media</div>
                <div>
                    <img
                        src={logo}
                        draggable="false"
                        alt="logo"
                    />
                </div>
                <div className="navButton"
                    onClick={() => scrollToSection(advertisementRef)}
                >Advertisement</div>
                <div
                    onClick={() => scrollToSection(donationRef)}
                >Donation</div>
                <div>Navbar</div>
            </div>
        </>
    );
});


export default Navbar