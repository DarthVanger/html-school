import { AvatarCorner } from './AvatarCorner/AvatarCorner.js';
import { Doska } from '../Doska/Doska.js';
import { Novoe } from './Novoe/Novoe.js';
import { Students } from './Students/Students.js';
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

  element.append(Students(state));
  //element.append(Novoe(state));
  //element.append(Doska(state));

  return element;
}
