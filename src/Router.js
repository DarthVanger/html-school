import { Topbar } from './Topbar.js';
import { BottomBar } from './BottomBar.js';
import { Login } from './Login.js';
import { HomePage } from './HomePage/HomePage.js';
import { NotFoundPage } from './NotFoundPage.js';
import { Skills } from './skills/skills.js';
import { QuestsPage } from './quests/QuestsPage.js';
import { QuestPage } from './quests/QuestPage.js';
import { LearningProgress } from './LearningProgress/LearningProgress.js';
import { QuizPage } from './Quiz/QuizPage.js';
//import { HomeworkPage } from './HomeworkPage/HomeworkPage.js';

const element = document.createElement('div');
element.id = 'router';

export const Router = (state) => {
  console.log('router, route: ', state.route);
  console.log('router, state: ', state);
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
    case '/quests':
      element.innerHTML = '';
      element.append(QuestsPage(state));
      break;
//    case '/homework':
//      element.innerHTML = '';
//      element.append(HomeworkPage(state));
//      break;
    case '/progress':
      element.innerHTML = `
        ${Topbar({ backUrl: '/#/', surface: 'black' })}
        ${BottomBar(state)}
      `;

    case '/quiz':
      const topbar = document.createElement('div');
      topbar.innerHTML = `${Topbar({ backUrl: '/#/', surface: 'black' })}`;
      const bottomBar = document.createElement('div');
      bottomBar.innerHTML = `${BottomBar(state)}`;

      element.innerHTML = '';
      element.append(topbar);
      element.append(QuizPage(state));
      element.append(bottomBar);
      break;

    case state.route.match(/[/]quests[/]/)?.input:
    case state.route.match(/[/]quests[/]/)?.input:
      const questId = state.route.match(/[/]quests[/]([^/]+)/)[1];
      element.innerHTML = '';
      state.questId = questId;
      console.log('appending quest page');
      element.append(QuestPage(state));
      break;
    default:
      console.log('404');
      element.innerHTML = NotFoundPage(state);
      break;
  }

  window.scrollTo(0, 0);

  return element;
};
