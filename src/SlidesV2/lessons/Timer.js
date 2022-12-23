export const Timer = (min) => {
  const el = document.createElement('div');
  el.id = 'task-timer';
  const getEl = () => document.querySelector('#task-timer') || el;
  let sec = min * 60;

  const render = () => {
    const min = parseInt(sec / 60);
    const minSec = sec % 60;
    const pad = x => String(x).padStart(2, '0');
    console.log('set el inner html');
    console.log(' el', el);
    getEl().innerHTML = `${pad(min)}:${pad(minSec)}`;
  };

  setInterval(() => {
    sec--;
    render();
  }, 1000);

  render();

  return el.outerHTML;
};
