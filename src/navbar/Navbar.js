import React from 'react';
import logo from '../logo.png';
import '../css/Navbar.css';


const scrollToSection = (reference) => {
    reference.current.scrollIntoView({ block: 'start', behavior: 'smooth' });
}

const Navbar = React.forwardRef((props, _) => {
    const { aboutRef, socialMediaRef,merchRef, advertisementRef, donationRef } = props;

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
                    onClick={() => scrollToSection(merchRef)}>Merchandies</div>
                <div className="navButton"
                    onClick={() => scrollToSection(advertisementRef)}
                >Advertisement</div>
                <div className="navButton"
                    onClick={() => scrollToSection(donationRef)}
                >Donation</div>
            </div>
        </>
    );
});


export default Navbar