import React, { useRef } from 'react';
import svkLargeLogo from './svkLargeLogo.png';
import './App.css';


import Navbar from './navbar/Navbar';
import LandingPage from './LandingPage';
import About from './About';
import Stat from './Stats';
import Donation from './Donation';
import SocialMedia from './SocialMedia';

function App() {

  const AboutRef = useRef();

  return (
    <div className="App">
      <Navbar aboutRefTest={AboutRef} />
      <LandingPage />
      <About ref={AboutRef} />
      <Stat ></Stat>
      <SocialMedia></SocialMedia>
      <Donation> </Donation>
      
    </div>
  );
}

export default App;
