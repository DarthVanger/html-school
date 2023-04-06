import { AvatarCorner } from './AvatarCorner/AvatarCorner.js';
import { Profile } from '../Profile/Profile.js';
import { Doska } from '../Doska/Doska.js';
import { OnlineStudents } from '../OnlineStudents/OnlineStudents.js';
import { AddToHomeScreen } from './AddToHomeScreen/AddToHomeScreen.js';

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
    ${AvatarCorner(state)}
  `;

  return element;
}
