import { BottomBar } from '../BottomBar.js';
import { Quest } from '../quests/MainPage/Levels/Quest.js';
import quests from '../quests/quests/quests.js';
import { Profile } from '../Profile/Profile.js';
import { Doska } from '../Doska/Doska.js';

export const HomePage = (state) => {

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

        ${Doska(state)}

        ${Profile(state)}

        <section id="main-page-links">
          <article>
            <h3>ДРЕВО УМЕНИЙ</h3>
            <a href="#/skills">
              <img src="src/HomePage/skills-tree.gif" />
            </a>
          </article>
          <article>
            <h3>ЗОДАНЕЯ</h3>
            <a href="#/quests">
              <img src="src/HomePage/lessons.gif" />
            </a>
          </article>
          <article>
            <h3>ПРОГРЕС</h3>
            <a href="#/progress">
              <img src="src/LearningProgress/learning-progress.png" />
            </a>
          </article>
          <article>
            <h3>СЛОВАРЕК</h3>
            <a href="https://docs.google.com/document/d/1J89zb6vTpfljXmxV2cEJx522XhNt-hmU/edit#" target="_blank">
              <img src="/src/img/vocabulary.jpeg" />
            </a>
          </article>
          <article>
            <h3>КУРСАЧ</h3>
            <a href="#/coursework">
              <img src="/src/Coursework/coursework.jpeg" />
            </a>
          </article>
          <article>
            <h3>ЭКЗАМЕНЫ</h3>
            <a href="#/quiz">
              <img src="src/Quiz/quiz.jpg" />
            </a>
          </article>
          <article>
            <h3>Neural ART УЧЕНЕКОВ</h3>
            <a href="#/neural-art">
              <img src="src/NeuralArt/neural-art.jpg" />
            </a>
          </article>
          <article>
            <h3>EXPECTATION / REALITY</h3>
            <a href="#/expectation-reality">
              <img src="src/ExpectationReality/expectation-reality.jpeg" />
            </a>
          </article>
          <article>
            <h3>Делоем РЕЗЮМЕ</h3>
            <a href="#/resume">
              <img src="src/Resume/resume.png" />
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
