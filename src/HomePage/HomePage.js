import { BottomBar } from '../BottomBar.js';
import { Quest } from '../quests/MainPage/Levels/Quest.js';
import quests from '../quests/quests/quests.js';
import { Profile } from '../Profile/Profile.js';
import { Doska } from '../Doska/Doska.js';
import { CurrentHomework } from '../Homework/CurrentHomework.js';
import { OnlineStudents } from '../OnlineStudents/OnlineStudents.js';
import { OnlineLog } from '../OnlineStudents/OnlineLog.js';

export const HomePage = (state) => {
  setTimeout(() => {
    const onlineStudentsContainer = document.querySelector('#online-students-container');
    const onlineLogContainer = document.querySelector('#online-log-container');
    onlineStudentsContainer.append(OnlineStudents(state));
    onlineLogContainer.append(OnlineLog(state));
  });

  return `
    <div id="home-page">
      <div class="weed-border-left">
        <img src="/src/HomePage/img/logo_leftt.png" />
      </div>

      <div class="weed-border-top-center"></div>

      <div class="weed-border-top-left">
        <img src="/src/HomePage/img/logo_left.png" />
      </div>

      <div class="weed-border-top-right"></div>

      <div class="weed-border-right">
      </div>

      <div align="justify" class="page-content">
        <marquee>
          <h1>ХТМЛ ШКОЛА - НАПАЛЕОН</h1>
        </marquee>

        <div id="online-students-container"></div>
        <div id="online-log-container"></div>

        ${CurrentHomework(state)}

        ${Doska(state)}

        ${Profile(state)}

        <h2>НАВЧАННЯ</h2>
        <section id="main-page-links">
          <article>
            <a href="#/homework">
              ДОМАШКА
            </a>
          </article>
          <article>
            <a href="#/skills">
              ДРЕВО УМЕНИЙ
            </a>
          </article>
          <article>
            <a href="#/quests">
              ЗОДАНЕЯ
            </a>
          </article>
          <article>
            <a href="#/progress">
              ПРОГРЕС
            </a>
          </article>
          <article>
            <a href="#/quiz">
              ЭКЗАМЕНЫ
            </a>
          </article>
          <article>
            <a href="#/katakombi">
              КАТАКОМБЫ
            </a>
          </article>
        </section>
        <h2>МАТЕРІАЛИ</h2>
        <section id="main-page-links">
          <article>
            <a href="#/coursework">
              КУРСАЧ
            </a>
          </article>
          <article>
            <a href="https://docs.google.com/document/d/1J89zb6vTpfljXmxV2cEJx522XhNt-hmU/edit#" target="_blank">
            СЛОВАРЕК
            </a>
          </article>
          <article>
            <a href="#/neural-art">
              Neural ART УЧЕНЕКОВ
            </a>
          </article>
          <article>
            <a href="#/expectation-reality">
              EXPECTATION / REALITY
            </a>
          </article>
          <article>
            <a href="#/resume">
              Делоем РЕЗЮМЕ
            </a>
          </article>
        </section>
      </div>

      <div class="weed-border-left-bottom">
      </div>

      <div class="weed-border-bottom-center">
      </div>

      <div class="weed-border-right-bottom">
      </div>

      ${BottomBar(state)}
    </div>
  `;
}
