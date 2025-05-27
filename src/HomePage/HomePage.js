import { AvatarCorner } from './AvatarCorner/AvatarCorner.js';
import { Doska } from '../Doska/Doska.js';
import { Novoe } from './Novoe/Novoe.js';
import { Students } from './Students/Students.js';
import { AddToHomeScreen } from './AddToHomeScreen/AddToHomeScreen.js';

export const HomePage = (state) => {
  const element = document.createElement('div');
  element.id = 'home-page';

  element.innerHTML =  `

    <div class="weed-border-left">
      <img src="/src/HomePage/img/logo_leftt.png" />
    </div>

    <div class="weed-border-top-center"></div>

    <div class="weed-border-top-left">
      <img src="/src/HomePage/img/logo_left.png" />
    </div>

    <div class="weed-border-top-right"></div>

    <div class="weed-border-right">
    </div>


    <div align="justify" class="page-content">
      <marquee>
        <h1>ХТМЛ ШКОЛА - НАПАЛЕОН</h1>
      </marquee>
    </div>


    <div class="weed-border-left-bottom">
    </div>

    <div class="weed-border-bottom-center">
    </div>

    <div class="weed-border-right-bottom">
    </div>

    ${AvatarCorner(state)}
  `;

  const content = element.querySelector('.page-content');

  content.append(Students(state));
  //element.append(Novoe(state));
  //element.append(Doska(state));

  return element;
}
