import React from 'react';
import '../App.css';
import Segment_text from '../segment_text/segment_text';
import '../segment_text/module.css';

function scene_3() {
  const title1 = "Годовое ТО";
  const paragraph1 = "";
  const title2 = "Выравнивание ";
  const paragraph2 = "колес";
  const title3 = "Настройка ";
  const paragraph3 = "переключателей";
  return (
    <div  class="scene_3">
      <div class="block_text_3 paragraph">
			Приехав к нам однажды, многие наши клиенты становятся постоянными, а часть из них даже друзьями.
			<br/>
			<br/>
			А также в нашей мастерской можно отремонтировать электросамокат и электровелосипед.
			</div>
			<ul class="placing_blocks_3"> 
				<li class="block_location_3 segment segment_color_1">
					<Segment_text title={title1} paragraph={paragraph1} />
				</li>
				<li class="block_location_3 segment segment_color_2">
					<Segment_text title={title2} paragraph={paragraph2} />
				</li>
				<li class="block_location_3 segment segment_color_3">
					<Segment_text title={title3} paragraph={paragraph3} />
				</li>
			</ul>
    </div>
  );
}
export default scene_3;