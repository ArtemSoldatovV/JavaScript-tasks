import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <head>
        <meta charset="utf-8" />
      </head>
      <body>
        <div id="about_carried"></div>
        <div id="What_we_offer"></div>
        <div id="services"></div>
        <div id="rent"></div>
            
          <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
          <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
          <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
          <script type="text/babel">
        ReactDOM.createRoot(document.getElementById("about_carried")) 
        .render(<div class="scene_1"> 
            <ul class="placing_blocks"> 
              <li class="block_text block_location">О нас</li>
              <li class="block_text block_location">Услуги</li>
              <li class="block_text block_location">Аренда</li>
            </ul>
            <div class="logo"> <img src="scene_1/logo_copy.png" width="100%" ></img> </div>
            <div class="oval"><p>Связаться</p></div>
            
            <ul class="placing_blocks_2"> 
              <li class="block_location_2">
                <div class="title paragraph_indentation">Веломастерская “Велозар”</div>
                <div class="paragraph">Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, которые смогли превратить свое увлечение и хобби в профессию. Мы сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды.</div>
              </li>
              <li class="block_location_2">
                <div class="dinosaur_place"><img src="program/dino.png" width="100%" ></img></div>
              </li>
            </ul>
            
            </div>);
            
          ReactDOM.createRoot(document.getElementById("What_we_offer"))
                  .render(<div class="scene_2">
            <div class="bicycles"> <img src="scene_2/bicycles.png" width="100%" ></img> </div>
            <div class="block_location_2_2">
              <div class="title paragraph_indentation">Веломастерская “Велозар”</div>
              <div class="paragraph">В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает избежать многих проблем и дорогого ремонта.  Все работы выполняем качественно и с душой. </div>
            </div>
            </div>);
            
          ReactDOM.createRoot(document.getElementById("services"))
                  .render(<div class="scene_3">
            <div class="block_text_3 paragraph">
            Приехав к нам однажды, многие наши клиенты становятся постоянными, а часть из них даже друзьями.
            <br/>
            <br/>
            А также в нашей мастерской можно отремонтировать электросамокат и электровелосипед.
            </div>
            <ul class="placing_blocks_3"> 
              <li class="block_location_3 segment segment_color_1">
              <div class="segment_text">Годовое ТО</div>
              </li>
              <li class="block_location_3 segment segment_color_2">
              <div class="segment_text">Выравнивание <br/>колес</div>
              </li>
              <li class="block_location_3 segment segment_color_3">
              <div class="segment_text">Настройка <br/>переключателей</div>
              </li>
            </ul>
            </div>);
            
          ReactDOM.createRoot(document.getElementById("rent"))
                  .render(<div class="scene_4">
            <div class="bicycles_2"> <img src="scene_4/bicycles_2.png" width="160%" ></img> </div>
            <div class="block_of_text"> 
              <div class="title paragraph_indentation">Прокат велосипедов</div>
              <div class="paragraph">У нас вы можете взять на прокат хорошо обслуженные и настроенные велосипеды. Как раз мы находимся в прекрасном парке!</div>
            </div>
            </div>)

        </script>
      </body>
    </div>
  );
}

export default App;
