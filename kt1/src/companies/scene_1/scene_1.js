import React from 'react';
import '../../App.css';

function scene_1() {
  return (
    <div class="scene_1" >
      <ul class="placing_blocks"> 
				<li class="block_text block_location">О нас</li>
				<li class="block_text block_location">Услуги</li>
				<li class="block_text block_location">Аренда</li>
			</ul>
			<div class="logo"> <img src="logo_copy.png" width="100%" alt="" ></img> </div>
			<div class="oval"><p>Связаться</p></div>
			
			<ul class="placing_blocks_2"> 
				<li class="block_location_2">
					<div class="title paragraph_indentation">Веломастерская “Велозар”</div>
					<div class="paragraph">Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, которые смогли превратить свое увлечение и хобби в профессию. Мы сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды.</div>
				</li>
				<li class="block_location_2">
					<div class="dinosaur_place"><img src="dino.png" width="100%" alt=""></img></div>
				</li>
			</ul>
    </div>
  );
}
export default scene_1;