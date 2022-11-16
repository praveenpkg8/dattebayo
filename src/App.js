import React, { useRef } from 'react';
import svkLargeLogo from './svkLargeLogo.png';
import './App.css';

import Navbar from './navbar/Navbar';
import LandingPage from './LandingPage';
import About from './About';
import Donation from './Donation';

function App() {

  const AboutRef = useRef();

  return (
    <div className="App">
      <Navbar aboutRefTest={AboutRef} />
      <LandingPage />
      <About ref={AboutRef} />
      <Donation> </Donation>
    </div>
  );
}

export default App;
