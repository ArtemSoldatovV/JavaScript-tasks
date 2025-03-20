import Scene_1 from './companies/scene_1/scene_1';
import './companies/scene_1/module.css';
import Scene_2 from './companies/scene_2/scene_2';
import './companies/scene_2/module.css';
import Scene_3 from './companies/scene_3/scene_3';
import './companies/scene_3/module.css';
import Scene_4 from './companies/scene_4/scene_4';
import './companies/scene_4/module.css';
import Segment_text from './companies/segment_text/segment_text';
import './companies/segment_text/module.css';
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