export const Timer = ({min, id, className}) => {
  const el = document.createElement('div');
  el.className = className;
  el.id = id;
  const getEl = () => document.querySelector(`#${id}`) || el;
  let sec = min * 60;

  const render = () => {
    const min = parseInt(sec / 60);
    const minSec = sec % 60;
    const pad = x => String(x).padStart(2, '0');
    getEl().innerHTML = `${pad(min)}:${pad(minSec)}`;
  };

  setInterval(() => {
    sec--;
    render();
  }, 1000);

  render();

  return el;
};
