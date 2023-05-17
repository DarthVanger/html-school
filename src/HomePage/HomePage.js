import { AvatarCorner } from './AvatarCorner/AvatarCorner.js';
import { Profile } from '../Profile/Profile.js';
import { Doska } from '../Doska/Doska.js';
import { Novoe } from './Novoe/Novoe.js';
import { AddToHomeScreen } from './AddToHomeScreen/AddToHomeScreen.js';

export const HomePage = (state) => {
  const element = document.createElement('div');
  element.id = 'home-page';

  element.innerHTML =  `
    <marquee>
      <h1>ХТМЛ ШКОЛА - НАПАЛЕОН</h1>
    </marquee>

    ${AvatarCorner(state)}
  `;

  element.append(Novoe(state));
  //element.append(Doska(state));
  element.append(Profile(state));

  return element;
}
