import React, { useRef } from 'react';
// import svkLargeLogo from './svkLargeLogo.png';
import './App.css';
// import Navbar from './navbar/Navbar';
import LandingPage from './LandingPage';
import About from './About';
import Stat from './Stats';
import Donation from './Donation';
import SocialMedia from './SocialMedia';
import Merch from './Merch';
import Advertisement from './pages/Advertisement/Advertisement';

function App() {

  const aboutRef = useRef();
  const socialMediaRef = useRef();
  const advertisementRef = useRef();

  const donationRef = useRef();

  return (
    <div className="App">
      <LandingPage 
      aboutRef={aboutRef}
      socialMediaRef={socialMediaRef}
      advertisementRef={advertisementRef}
      donationRef={donationRef}
      />
      <About ref={aboutRef} />
      <SocialMedia ref={socialMediaRef} />
      {/* <Merch ref={socialMediaRef} /> */}
      {/* <Stat ></Stat>  */}
      <Advertisement ref={advertisementRef} />
      <Donation ref={donationRef} />
    </div>
  );
}

export default App;
