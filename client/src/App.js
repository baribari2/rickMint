import react from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import Navbar from './Navbar.js';
import Minter from './Minter.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Minter />
    </div> 
  );
}

export default App;
