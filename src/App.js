import svkLargeLogo from './svkLargeLogo.png';
import './App.css';

import Navbar from './navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img 
        className="SvkLargeImage"
        src={svkLargeLogo}  
        alt="logo" 
        draggable="false" 
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://direct.me/schumyvannakaviyangal"
          target="_blank"
          rel="noopener noreferrer"
        >
          Schummy Vanna Kaviyangal
        </a>
      </header>
    </div>
  );
}

export default App;
