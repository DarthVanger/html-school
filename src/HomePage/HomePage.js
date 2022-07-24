import { BottomBar } from '../BottomBar.js';

export const HomePage = (state) => `
  <div id="home-page">
    <div class="weed-border-left">
      <img src="HomePage/img/logo_leftt.png" />
    </div>

    <div class="weed-border-top-center"></div>

    <div class="weed-border-top-left">
      <img src="src/HomePage/img/logo_left.png" />
    </div>

    <div class="weed-border-top-right"></div>

    <div class="weed-border-right">
    </div>

    <div align="justify" class="page-content">
      <marquee>
        <h1>ХТМЛ ШКОЛА - НАПАЛЕОН</h1>
      </marquee>

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
          <h3>ЗОДАНИЯ</h3>
          <a href="#/quests">
            <img src="src/HomePage/lessons.gif" />
          </a>
        </article>
        <!--
        <article>
          <h3>ДОСКА ПОМËТА</h3>
          <a href="rating">
            <img src="Rating/rating.gif" />
          </a>
        </article>
        <article>
          <h3>ДРЕВО УМЕНИЙ</h3>
          <img src="src/HomePage/skills-tree.gif" />
          <a href="skills/skills/html"></a>
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
  </div>
` + BottomBar(state);
