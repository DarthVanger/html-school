import { lessonsHtml } from './lessonsHtml.js';
import { Dictation } from './Dictation.js';

export const SlidesV1 = ({ lesson }) => {
  const element = document.createElement('div');
  element.id = 'slides-v1';

  const pageURL = '/#/slides/v2';

  element.append(Dictation());

  console.info(`SlidesV1: Show lesson ${lesson}`, );

  let currentTime = 0;

  setTimeout(() => {
    const left = document.querySelector('.prev-slide-btn');
    const right = document.querySelector('.next-slide-btn');

    left.addEventListener('click', () => {
        prevPage();
    });

    right.addEventListener('click', () => {
        nextPage();
    });
  });

  let currentPage = parseInt(location.hash.replace(/#lesson[0-9]+-page/, '')) || 0;

  console.info('SlidesV1: Current Page: ', currentPage);

  const nextPage = () => {
      currentPage++;
      showCurrentPage();
  };

  const prevPage = () => {
      currentPage--;
      showCurrentPage();
  };

  const showCurrentPage = () => {
      currentTime = 0;
      const pageSelector = `#${lesson}-page${currentPage}`;
      console.log('page selector', pageSelector);
      const page = document.querySelector(pageSelector);
      console.log('page: ', page);
      const pageContent = document.querySelector('.page-content');
      pageContent.innerHTML = '';
      pageContent.append(page.cloneNode(true).content);
      const historyURL = pageURL + '#page' + currentpage;
      console.log('push history state: ', historyURL);
      window.history.pushState(historyURL, 'page ' + currentPage, `${pageSelector}`);

      const expectationsForm = document.querySelector('.expectations-form');
      if (expectationsForm) {
        const inputs = expectationsForm.querySelectorAll('input');

        inputs.forEach(input => {
            input.addEventListener('keyup', e => {
                localStorage.setItem(e.target.name, e.target.value);
            });
        });
      }


      const task1video = document.querySelector('#lesson4-video');
      if (task1video) {
        const showTimer = (time) => {
            const h2 = document.querySelector('h2');
            const tasks = document.querySelector('.lety4ka-tasks');
            const pre = tasks.querySelector('pre');
            const taskVideo = document.querySelector('video.task');
            taskVideo.style.display = 'none';
            const noisia = document.querySelector('video.noisia');
            noisia.style.display = 'initial';
            tasks.style.display = 'block';
            h2.style.color = 'red';
            const startTime = (new Date()).getTime();

            tasks.addEventListener('click', () => {
                noisia.play();
            });

            pre.textContent = `
              <script>
                function moveShip() {
                    var ship = document.querySelector('img');
                    ship.style.left = '500px';
                }

                document.addEventListener('click', moveShip);
              <\/script>
          `;

            setInterval(() => {
                const currentTime = (new Date()).getTime();
                const diff = currentTime - startTime;
                const elapsedSec = Math.round(diff / 1000);
                const secToEnd = 5 * 60 - elapsedSec;
                const min = Math.floor(secToEnd / 60);
                const sec = Math.floor(secToEnd % 60);
                h2.innerHTML = `${min}:${sec}`;
            }, 1000);
        };

        task1video.addEventListener('play', () => {
            setTimeout(() => showTimer(5000), 46470);
        });
      }

      const expectation = document.querySelector('#expecation');
      if (expectation) {
          const tony = localStorage.getItem('tony');
          const morphem = localStorage.getItem('morphem');
          const johnny = localStorage.getItem('johnny');
          expectation.innerHTML = `
            <ul>
             <li>Tony: ${tony}</li>
             <li>Johnny: ${johnny}</li>
             <li>Morphem: ${morphem}</li>
           </ul>
         `;
      }
  };

  setTimeout(() => {
    const timer = document.querySelector('#timer');

    const zeroPad = (num, places) => String(num).padStart(places, '0');

    setInterval(() => {
      timer.innerHTML = `${zeroPad(Math.floor(currentTime / 60), 2)}:${zeroPad(Math.floor(currentTime % 60), 2)}`;
      currentTime++;
      if (currentTime > 24 * 60) {
          timer.style.color = 'red';
      }
      if (currentTime > 25 * 60 ) {
          timer.style.color = 'white';
          currentTime = 0;
      }
    }, 1000);

    showCurrentPage();
  });

  element.innerHTML = `
    <div class="page-content"></div>
    <button type="button" class="prev-slide-btn">&lsaquo;</button>
    <button type="button" class="next-slide-btn">&rsaquo;</button>

    <div id="timer">
      00:00
    </div>
    ${lessonsHtml}
  `;

  return element;
};
