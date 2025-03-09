import Scene_1 from './scene_1/scene_1';
import './scene_1/module.css';
import Scene_2 from './scene_2/scene_2';
import './scene_2/module.css';
import Scene_3 from './scene_3/scene_3';
import './scene_3/module.css';
import Scene_4 from './scene_4/scene_4';
import './scene_4/module.css';
import Segment_text from './segment_text/segment_text';
import './segment_text/module.css';
import './App.css';
import React from 'react';

function App() {
  return (
    <div class="div_margin">
      <ul class=".block_location_main">
        <li class="block_location_main">
        <Scene_1 />
        </li>
        <li class="block_location_main">
        <Scene_2 />
        </li>
        <li class="block_location_main">
        <Scene_3 />
        </li>
        <li class="block_location_main">
        <Scene_4 />
        </li>
      </ul>
    </div>
  );
}

export default App;