import { BottomBar } from '../BottomBar.js';
import { Quest } from '../quests/MainPage/Levels/Quest.js';
import quests from '../quests/quests/quests.js';

export const HomePage = (state) => `
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

      <section class="homework">
        <h2>домашека!!11</h2>
        <div id="levels">
          <div class="quest-list">
            ${Quest({
              ...quests.layers,
              title: 'Слои Игры',
              imgSrc: 'src/quests/img/spaceship.gif',
            })}
          </div>
        </div>
      </section>
      <!-- 
      <h2>ССЫЛКЕ</h2>
      -->
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
          <h3>Делоем РЕЗЮМЕ</h3>
          <a href="#/resume">
            <img src="src/Resume/resume.png" />
          </a>
        </article>
        <article>
          <h3>EXPECTATION / REALITY SHOW</h3>
          <a href="#/expectation-reality">
            <img src="src/ExpectationReality/expectation-reality.jpeg" />
          </a>
        </article>
        <article>
          <h3>Neural ART УЧЕНЕКОВ</h3>
          <a href="#/neural-art">
            <img src="src/NeuralArt/neural-art.jpg" />
          </a>
        </article>
        <!--
        <article>
          <h3>ТВИЧ</h3>
          <a href="#/twitch">
            <img src="src/Twitch/twitch.png" />
          </a>
        </article>
        -->
        <!--
        <article>
          <h3>ЭКЗАМЕНЫ</h3>
          <a href="#/quiz">
            <img src="src/Quiz/quiz.jpg" />
          </a>
        </article>
        -->
        <!--
        <article>
          <h3>КУРСАЧИ</h3>
          <a href="#/coursework">
            <img src="src/Courserwork/courserwork.jpeg" />
          </a>
        </article>
        -->
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
