import React from 'react';
import logo from '../logo.png';
import '../css/Navbar.css';


const scrollToSection = (reference) => {
    reference.current.scrollIntoView({ block: 'end', behavior: 'smooth' });
}

const Navbar = React.forwardRef((props, _) => {
    const { aboutRefTest } = props;
    return (
        <>
            <div className="Navbar">
                <div
                    onClick={() => scrollToSection(aboutRefTest)}
                >About</div>
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
    );
});


export default Navbar