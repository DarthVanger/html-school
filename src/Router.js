import { Topbar } from './Topbar.js';
import { BottomBar } from './BottomBar.js';
import { Login } from './Login.js';
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
import { Homework } from './Homework/Homework.js';
import { Scene3d } from './Scene3d/Scene3d.js';
import { Lesson25 } from './Lesson25/Lesson25.js';
import { Katakombi } from './Katakombi/Katakombi.js';
import { Slides } from './SlidesV2/Slides.js';
import { Banki } from './Banki/Banki.js';
import { Vangers } from './Vangers/Vangers.js';
import { Quiz2 } from './Quiz2/Quiz2.js';
import { Study } from './Study/Study.js';
import { Resources } from './Resources/Resources.js';
import { Chat } from './Chat/Chat.js';
import { OnlineLog } from './OnlineStudents/OnlineLog.js';

export const Router = (state) => {
  const element = document.createElement('div');
  element.id = 'router';
  const pageSlot = document.createElement('div');
  pageSlot.innerHTML = 'asdf';
  element.append(pageSlot);

  console.log('router, route: ', state.route);
  console.log('router, state: ', state);

  switch (state.route) {
    case '/':
      pageSlot.innerHTML = '';
      pageSlot.append(HomePage(state));
      break;
    case '/login':
      pageSlot.innerHTML = Login(state);
      break;
    case '/chat':
      pageSlot.innerHTML = '';
      pageSlot.append(Chat(state));
      break;
    case '/study':
      pageSlot.innerHTML = '';
      pageSlot.append(Study(state));
      break;
    case '/resources':
      pageSlot.innerHTML = '';
      pageSlot.append(Resources(state));
      break;
    case '/online-log':
      pageSlot.innerHTML = '';
      pageSlot.append(OnlineLog(state));
      break;
    case '/banki':
      pageSlot.append(Banki(state));
      break;
    case '/skills':
      pageSlot.innerHTML = '';
      pageSlot.append(Skills(state));
      break;
    case '/3d':
      pageSlot.innerHTML = '';
      pageSlot.innerHTML = `
        ${Scene3d(state)}
      `;
      break;
    case '/lesson-25':
      pageSlot.innerHTML = '';
      pageSlot.innerHTML = `
        ${Lesson25(state)}
      `;
      break;
    case '/quests':
      pageSlot.innerHTML = '';
      pageSlot.append(QuestsPage(state));
      break;
    case '/katakombi':
      pageSlot.innerHTML = '';
      pageSlot.append(Katakombi(state));

    case '/progress':
      pageSlot.innerHTML = `
        ${Topbar({ backUrl: '/#/', surface: 'black' })}
      `;
      pageSlot.append(LearningProgress(state));
      break;

    case '/quiz':
      const topbar = document.createElement('div');
      topbar.innerHTML = `${Topbar({ backUrl: '/#/', surface: 'black' })}`;

      pageSlot.innerHTML = '';
      pageSlot.append(topbar);
      pageSlot.append(QuizPage(state));
      break;

    case '/expectation-reality':
      pageSlot.innerHTML = '';
      element.innerHTML = `${ExpectationReality({ backUrl: '/#/', surface: 'black' })}`;
      break;

    case '/neural-art':
      pageSlot.innerHTML = '';
      pageSlot.innerHTML = `${NeuralArt()}`;
      
      break;

    case state.route.match(/\/resume\/?/)?.input:
      pageSlot.innerHTML = '';
      pageSlot.innerHTML = `
        ${Topbar({ backUrl: '/#/', surface: 'black' })}
        ${Resume(state)}
      `;
      break;

    case '/coursework':
      pageSlot.innerHTML = '';
      pageSlot.innerHTML = `
        ${Topbar({ backUrl: '/#/', surface: 'black' })}
      `;
      pageSlot.append(Coursework(state));
      break;

    case '/vangers':
      pageSlot.innerHTML = '';
      pageSlot.append(Vangers(state));
      break;

    case '/quiz2':
      pageSlot.innerHTML = '';
      pageSlot.append(Quiz2(state));
      break;

    case '/homework':
      pageSlot.innerHTML = '';
      pageSlot.append(Homework(state));
      break;

    case state.route.match(/[/]slides[/]/)?.input:
      const lessonName = state.route.replace(/[/]slides[/]/, '');
      console.log('render lesson');
      pageSlot.innerHTML = '';
      pageSlot.append(Slides({state, lessonName}));
      break;

    case state.route.match(/[/]quests[/]/)?.input:
    case state.route.match(/[/]quests[/]/)?.input:
      const questId = state.route.match(/[/]quests[/]([^/]+)/)[1];
      pageSlot.innerHTML = '';
      state.questId = questId;
      console.log('appending quest page');
      pageSlot.append(QuestPage(state));
      break;
    default:
      console.log('404');
      pageSlot.innerHTML = NotFoundPage(state);
      break;
  }

  window.scrollTo(0, 0);

  return pageSlot;
};
