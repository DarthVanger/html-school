import { Login } from './Login/Login.js';
import { HomePage } from './HomePage/HomePage.js';
import { NotFoundPage } from './NotFoundPage.js';
import { Skills } from './skills/skills.js';
import { QuestList } from './quests/QuestList/QuestList.js';
import { QuestPage } from './quests/QuestPage.js';
import { LearningProgress } from './LearningProgress/LearningProgress.js';
import { Exams } from './Exams/Exams.js';
import { Exam1 } from './Exams/Exam1/Exam1.js';
import { Exam2 } from './Exams/Exam2/Exam2.js';
import { Exam3 } from './Exams/Exam3/Exam3.js';
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
import { Lessons } from './Lessons/SlidesV2/Lessons.js';
import { Vangers } from './Vangers/Vangers.js';
import { Study } from './Study/Study.js';
import { Materiali } from './Materiali/Materiali.js';

export const Router = (state) => {
  console.info('Router: route: ', state.route);

  switch (state.route) {
    case '/':
      return HomePage(state);
    case '/login':
      return Login(state);
    case '/study':
      return Study(state);
    case '/materiali':
      return Materiali(state);
    case '/skills':
      return Skills(state);
    case '/raznoe/3d':
      return Scene3d(state);
    case '/lesson-25':
      return Lesson25(state);
    case '/quests':
      return QuestList(state);
    case '/katakombi':
      return Katakombi(state);
    case '/progress':
      return LearningProgress(state);
    case '/exam':
      return Exams(state);
    case '/exam/1':
      return Exam1(state);
    case '/exam/2':
      return Exam2(state);
    case '/exam/3':
      return Exam3(state);
    case '/expectation-reality':
      return ExpectationReality(state);
    case '/neural-art':
      return NeuralArt();
    case state.route.match(/\/resume\/?/)?.input:
      return Resume(state);
    case '/coursework':
      return Coursework(state);
    case state.route.match(/[/]vangers[/]*/)?.input:
      return Vangers(state)
    case '/quiz2':
      return Quiz2(state);
    case '/homework':
      return Homework(state);
    case '/lessons':
      return Lessons(state);
    case state.route.match(/[/]slides[/]v1/)?.input:
      const lesson = state.route.replace(/[/]slides[/]v1#/, '');
      console.info(`Router: returning SlidesV1 for lesson "${lesson}"`);
      return SlidesV1({ lesson });
    case state.route.match(/[/]slides[/]v2[/]/)?.input:
      const lessonName = state.route.replace(/[/]slides[/]v2[/]/, '');
      console.info(`Router: returning SlidesV2 for lesson "${lessonName}"`);
      return SlidesV2({state, lessonName});
    case state.route.match(/[/]quests[/]/)?.input:
      const questId = state.route.match(/[/]quests[/]([^/]+)/)[1];
      state.questId = questId;
      return QuestPage(state);
    default:
      return NotFoundPage(state);
  }
};
