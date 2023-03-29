import { Topbar } from './Topbar.js';
import { Login } from './Login.js';
import { HomePage } from './HomePage/HomePage.js';
import { NotFoundPage } from './NotFoundPage.js';
import { Skills } from './skills/skills.js';
import { QuestsPage } from './quests/QuestsPage.js';
import { QuestPage } from './quests/QuestPage.js';
import { LearningProgress } from './LearningProgress/LearningProgress.js';
import { Exams } from './Exams/Exams.js';
import { Exam1 } from './Exams/Exam1/Exam1.js';
import { Exam2 } from './Exams/Exam2/Exam2.js';
import { ExpectationReality } from './Raznoe/ExpectationReality/ExpectationReality.js';
import { NeuralArt } from './NeuralArt/NeuralArt.js';
import { Resume } from './Resume/Resume.js';
import { Coursework } from './Coursework/Coursework.js';
import { Homework } from './Homework/Homework.js';
import { Scene3d } from './Raznoe/Scene3d/Scene3d.js';
import { Lesson25 } from './Lessons/Lesson25/Lesson25.js';
import { Katakombi } from './Katakombi/Katakombi.js';
import { SlidesV1 } from './Lessons/SlidesV1/SlidesV1.js';
import { SlidesV2 } from './Lessons/SlidesV2/SlidesV2.js';
import { Banki } from './Raznoe/Banki/Banki.js';
import { Vangers } from './Vangers/Vangers.js';
import { Study } from './Study/Study.js';
import { Materiali } from './Materiali/Materiali.js';
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
      const chat = Chat(state);
      pageSlot.append(chat);
      break;
    case '/study':
      pageSlot.innerHTML = '';
      pageSlot.append(Study(state));
      break;
    case '/materiali':
      pageSlot.innerHTML = '';
      pageSlot.append(Materiali(state));
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
    case '/raznoe/3d':
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

    case '/exam':
      const examsTopbar = document.createElement('div');
      examsTopbar.innerHTML = `${Topbar({ backUrl: '/#/', surface: 'black' })}`;

      pageSlot.innerHTML = '';
      pageSlot.append(examsTopbar);
      pageSlot.append(Exams(state));
      break;

    case '/exam/1':
      const exam1Topbar = document.createElement('div');
      exam1Topbar.innerHTML = `${Topbar({ backUrl: '/#/exam', surface: 'black' })}`;

      pageSlot.innerHTML = '';
      pageSlot.append(exam1Topbar);
      pageSlot.append(Exam1(state));
      break;

    case '/exam/2':
      const exam2Topbar = document.createElement('div');
      exam2Topbar.innerHTML = `${Topbar({ backUrl: '/#/exam', surface: 'black' })}`;

      pageSlot.innerHTML = '';
      pageSlot.append(exam2Topbar);
      pageSlot.append(Exam2(state));
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

    case state.route.match(/[/]slides[/]v1/)?.input:
      const lesson = state.route.replace(/[/]slides[/]v1#/, '');
      console.info(`Router: rendering SlidesV1 for lesson "${lesson}"`);
      pageSlot.innerHTML = '';
      pageSlot.append(SlidesV1({ lesson }));
      break;

    case state.route.match(/[/]slides[/]v2[/]/)?.input:
      const lessonName = state.route.replace(/[/]slides[/]v2[/]/, '');
      console.info(`Router: rendering SlidesV2 for lesson "${lessonName}"`);
      pageSlot.innerHTML = '';
      pageSlot.append(SlidesV2({state, lessonName}));
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
