import { Chapter1 } from './Chapter1.js';
import { ChapterNuclear } from './ChapterNuclear.js';
import { ChapterCover } from './ChapterCover.js';
import { VangersPlayer, resumeMusic } from './VangersPlayer.js';

import {
  checkVangersRepoCreated,
  getGithubName,
  checkFirstCommitCreated,
  checkAppJsCreated, 
  checkTimeCreated,
} from './Proverka.js';

export const Vangers = (state) => {
  const element = document.createElement('section');
  const student = state.student;
  element.id = 'vangers';

  element.append(VangersPlayer());

  document.body.className = 'vangers-page';

  let step = localStorage.getItem('vangers-step') || 0;

  const paragraphs = Chapter1.paragraphs;

  async function nextStep() {
    if (step === 10) {
      console.log('step is 10!');
      const isRepoCreated = await checkVangersRepoCreated(student);
      if (!isRepoCreated) {
        console.log('repo not created can not go next step');
        const githubName = getGithubName(student);
        const repoUrl = `https://github.com/${githubName}/vangers`;
        hint.innerHTML = `<div>Создай репозиторей ёпта. <a href="${repoUrl}" target="_blank">${repoUrl}</a> По ссылке-то 404!</div>`;
        return;
      } else {
        console.log('repo is created, going to next step');
      }
    }

    if (step === 27) {
      console.log('step is 27!');
      const isCommitCreated = await checkFirstCommitCreated(student);
      if (!isCommitCreated) {
        console.log('commit not created can not go next step');
        const githubName = getGithubName(student);
        const commitHistoryUrl = `https://github.com/${githubName}/vangers/commits/master`;
        hint.innerHTML = `<div>Запуш коммиты ёпта. <a href="${commitHistoryUrl}" target="_blank">${commitHistoryUrl}</a> Коммит на Гтихабе не появился-то!</div>`;
        return;
      } else {
        console.log('commit is created, going to next step');
      }
    }

    if (step === 30) {
      console.log('step is 30!');
      await checkTimeCreated();
      const isAppJsCreated = await checkAppJsCreated(student);
      if (!isAppJsCreated) {
        console.log('app.js not created can not go next step');
        const githubName = getGithubName(student);
        const appJsUrl = `https://github.com/${githubName}/vangers/blob/master/app.js`;
        hint.innerHTML = `<div>На ГитХабе app.js то нету? Ширшавый <a href="${appJsUrl}" target="_blank">${appJsUrl}</a></div>`;
        return;
      } else {
        console.log('app.js is created, going to next step');
      }
    }

    nextStepBtn.classList.add('push');
    setTimeout(() => { nextStepBtn.classList.remove('push') }, 4000);
    if (step > paragraphs.length - 1) return;
    step++;
    showStep(step);
  };

  function prevStep() {
    if (step < 1) return;
    step--;
    showStep(step);
  };

  function showStep(s) {
    console.log('Show step: ', s);
    localStorage.setItem('vangers-step', s);
    messageElement.innerHTML = paragraphs[s];
    video.play();
  }

  const messagePanel = document.createElement('article');
  const messageElement = document.createElement('p');
  messagePanel.id = 'message-panel';
  messageElement.innerHTML = paragraphs[step];
  messagePanel.append(messageElement);
  element.append(messagePanel);

  const nextStepBtn = document.createElement('img');
  nextStepBtn.src = '/img/vangers/next-button.png';
  nextStepBtn.id = 'next-step-img';
  nextStepBtn.addEventListener('click', nextStep);
  element.append(nextStepBtn);

  const prevStepBtn = document.createElement('img');
  prevStepBtn.src = '/img/vangers/prev-button.png';
  prevStepBtn.id = 'prev-step-img';
  prevStepBtn.addEventListener('click', prevStep);
  element.append(prevStepBtn);

  const backgroundImg = document.createElement('img');
  backgroundImg.src = '/img/vangers/fostral.jpg';
  backgroundImg.id = 'background-img';
  element.append(backgroundImg);

  const videoContainer = document.createElement('div');
  videoContainer.id = 'video-container';
  const video = document.createElement('video');
  video.src = '/video/vangers/fostral.mp4';
  videoContainer.append(video);
  element.append(videoContainer);

  const hint = document.createElement('div');
  hint.id = 'hint';
  element.append(hint);

  const introVid = document.createElement('video');
  introVid.id = 'intro-vid';
  introVid.src = '/video/vangers/open.mp4';
  const introVidDuration = 5000;
  const fadeDuration = 1000;
  setTimeout(() => {
      introVid.volume = 0;
  }, 4500);

  introVid.addEventListener('click', () => {
    introVid.play();
    setTimeout(() => {
      introVid.classList.add('fade-out-1s');
      setTimeout(() => {
        introVid.remove();
        resumeMusic();
        video.play();
      }, fadeDuration);
    }, introVidDuration);
  });
  element.append(introVid);

  return element;
};
