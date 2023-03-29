import { AvatarCorner } from './AvatarCorner/AvatarCorner.js';
import { Profile } from '../Profile/Profile.js';
import { Doska } from '../Doska/Doska.js';
import { Novoe } from './Novoe.js';
import { OnlineStudents } from '../OnlineStudents/OnlineStudents.js';
import { AddToHomeScreen } from './AddToHomeScreen/AddToHomeScreen.js';

export const HomePage = (state) => {
  const element = document.createElement('div');
  element.id = 'home-page';

  element.innerHTML =  `
    <div align="justify" class="page-content">
      <marquee>
        <h1>ХТМЛ ШКОЛА - НАПАЛЕОН</h1>
      </marquee>

    </div>
    ${AvatarCorner(state)}
  `;

  element.append(Novoe(state));
  element.append(OnlineStudents(state));
  //element.append(Doska(state));
  element.append(Profile(state));

  return element;
}
