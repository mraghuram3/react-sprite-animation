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
        <Sprite
        spriteImg={
          'https://miro.medium.com/max/1400/1*GJ6ZL0eX8tJE54ZYFSnI9Q.png'
        }
        frames={8}
      />
    </div>
  );
}

export default App;
