import React, { useRef } from 'react';
import svkLargeLogo from './svkLargeLogo.png';
import './App.css';

import Navbar from './navbar/Navbar';
import LandingPage from './LandingPage';
import About from './About';
import Donation from './Donation';
import SocialMedia from './SocialMedia';

function App() {

  const aboutRef = useRef();
  const socialMediaRef = useRef();


  return (
    <div className="App">
      {/* <Navbar aboutRefTest={AboutRef} /> */}
      <LandingPage 
      aboutRef={aboutRef}
      socialMediaRef={socialMediaRef}
      />
      <About ref={aboutRef} />
      <SocialMedia ref={socialMediaRef} />
      <Donation> </Donation>
      
    </div>
  );
}

export default App;
