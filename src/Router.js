import { Login } from './Login.js';
import { HomePage } from './HomePage/HomePage.js';
import { NotFoundPage } from './NotFoundPage.js';
import { Skills } from './skills/Skills.js';

const element = document.createElement('div');
element.id = 'router';

export const Router = (state) => {
  console.log('router, route: ', state.route);
  switch (state.route) {
    case '/':
      element.innerHTML = HomePage(state);
      break;
    case '/login':
      element.innerHTML = Login(state);
      break;
    case '/skills':
      element.innerHTML = '';
      element.append(Skills(state));
      break;
    default:
      console.log('404');
      element.innerHTML = NotFoundPage(state);
      break;
  }

  return element;
};
