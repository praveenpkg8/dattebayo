import React, { useRef } from 'react';
import svkLargeLogo from './svkLargeLogo.png';
import './App.css';


import Navbar from './navbar/Navbar';
import About from './About';
import Stat from './Stats';

function App() {

  const AboutRef = useRef();

  return (
    <div className="App">
      <Navbar aboutRefTest={AboutRef} />
      <header className="App-header">
        <img
          className="SvkLargeImage"
          src={svkLargeLogo}
          alt="logo"
          draggable="false"
        />
        <a
          className="App-link"
          href="https://direct.me/schumyvannakaviyangal"
          target="_blank"
          rel="noopener noreferrer"
        >
          Schummy Vanna Kaviyangal
        </a>
      </header>
      <About ref={AboutRef} />
      <Stat ></Stat>
    </div>
  );
}

export default App;
