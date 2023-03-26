import { AvatarCorner } from './AvatarCorner/AvatarCorner.js';
import { Profile } from '../Profile/Profile.js';
import { Doska } from '../Doska/Doska.js';
import { OnlineStudents } from '../OnlineStudents/OnlineStudents.js';
import { AddToHomeScreen } from '../AddToHomeScreen/AddToHomeScreen.js';

export const HomePage = (state) => {
  const element = document.createElement('div');
  element.id = 'home-page';

  setTimeout(() => {
    const onlineStudentsContainer = document.querySelector('#online-students-container');

    onlineStudentsContainer.append(OnlineStudents(state));

    const addToHomeScreenContainer = document.querySelector('#add-to-home-screen-container');
    addToHomeScreenContainer.append(AddToHomeScreen());
  });

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

      <div id="add-to-home-screen-container"></div>

      <h2>Зараз Онлайн</h2>
      <div id="online-students-container"></div>

      ${Doska(state)}

      <h2>Профіль</h2>
      ${Profile(state)}
    </div>


    <div class="weed-border-left-bottom">
    </div>

    <div class="weed-border-bottom-center">
    </div>

    <div class="weed-border-right-bottom">
    </div>

    ${AvatarCorner(state)}
  `;

  return element;
}
