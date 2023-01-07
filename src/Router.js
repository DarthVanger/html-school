import { Topbar } from './Topbar.js';
import { BottomBar } from './BottomBar.js';
import { Login } from './Login.js';
import { Learn } from './Learn/Learn.js';
import { HomePage } from './HomePage/HomePage.js';
import { NotFoundPage } from './NotFoundPage.js';
import { Skills } from './skills/skills.js';
import { QuestsPage } from './quests/QuestsPage.js';
import { QuestPage } from './quests/QuestPage.js';
import { LearningProgress } from './LearningProgress/LearningProgress.js';
import { Twitch } from './Twitch/Twitch.js';
import { QuizPage } from './Quiz/QuizPage.js';
import { ExpectationReality } from './ExpectationReality/ExpectationReality.js';
import { NeuralArt } from './NeuralArt/NeuralArt.js';
import { Resume } from './Resume/Resume.js';
import { Coursework } from './Coursework/Coursework.js';
//import { HomeworkPage } from './HomeworkPage/HomeworkPage.js';
import { Scene3d } from './Scene3d/Scene3d.js';
import { Lesson25 } from './Lesson25/Lesson25.js';
import { Katakombi } from './Katakombi/Katakombi.js';
import { Slides } from './SlidesV2/Slides.js';

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
    case '/learn':
      element.innerHTML = Learn(state);
      break;
    case '/skills':
      element.innerHTML = '';
      element.append(Skills(state));
      break;
    case '/3d':
      element.innerHTML = '';
      element.innerHTML = `
        ${Scene3d(state)}
      `;
      break;
    case '/lesson-25':
      element.innerHTML = '';
      element.innerHTML = `
        ${Lesson25(state)}
      `;
      break;
    case '/quests':
      element.innerHTML = '';
      element.append(QuestsPage(state));
      break;
    case '/katakombi':
      element.innerHTML = '';
      element.append(Katakombi(state));

      break;
//    case '/homework':
//      element.innerHTML = '';
//      element.append(HomeworkPage(state));
//      break;
    case '/progress':
      element.innerHTML = `
        ${Topbar({ backUrl: '/#/', surface: 'black' })}
      `;
      element.append(LearningProgress(state));
      break;

    case '/quiz':
      const topbar = document.createElement('div');
      topbar.innerHTML = `${Topbar({ backUrl: '/#/', surface: 'black' })}`;

      element.innerHTML = '';
      element.append(topbar);
      element.append(QuizPage(state));
      break;

    case '/expectation-reality':
      element.innerHTML = '';
      element.innerHTML = `${ExpectationReality({ backUrl: '/#/', surface: 'black' })}`;
      break;

    case '/neural-art':
      element.innerHTML = '';
      element.innerHTML = `${NeuralArt()}`;
      
      break;

    case state.route.match(/\/resume\/?/)?.input:
      element.innerHTML = '';
      element.innerHTML = `
        ${Topbar({ backUrl: '/#/', surface: 'black' })}
        ${Resume(state)}
      `;
      break;

    case '/coursework':
      element.innerHTML = '';
      element.innerHTML = `
        ${Topbar({ backUrl: '/#/', surface: 'black' })}
      `;
      element.append(Coursework(state));
      break;

    case state.route.match(/[/]slides[/]/)?.input:
      const lessonName = state.route.replace(/[/]slides[/]/, '');
      console.log('render lesson');
      element.innerHTML = '';
      element.append(Slides({state, lessonName}));
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
