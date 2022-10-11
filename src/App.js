import React from 'react';


import { Sprite } from './lib';

// import spiteImg form './idle.png';

import './App.css';

function App() {
  return (
    <div className="App">
        react-sprite-animation
        <br />
        <br />
        <Sprite  spriteImg={require('./idle.png')} frames={10}/>
    </div>
  );
}

export default App;
