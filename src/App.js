import React, { useRef } from 'react';
// import svkLargeLogo from './svkLargeLogo.png';
import './App.css';
// import Navbar from './navbar/Navbar';
import LandingPage from './LandingPage';
import About from './About';
import Stat from './Stats';
import Donation from './Donation';
import SocialMedia from './SocialMedia';

function App() {

  const aboutRef = useRef();
  const socialMediaRef = useRef();
  const donationRef = useRef();

  return (
    <div className="App">
      {/* <Navbar aboutRefTest={AboutRef} /> */}
      <LandingPage 
      aboutRef={aboutRef}
      socialMediaRef={socialMediaRef}
      donationRef={donationRef}
      />
      <About ref={aboutRef} />
      <SocialMedia ref={socialMediaRef} />
      <Stat ></Stat> 
      <Donation ref={donationRef} />
    </div>
  );
}

export default App;
