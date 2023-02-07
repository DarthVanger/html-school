const getElement = () => document.querySelector('#volume');

const defaultVolume = 0.3;
const savedVolume = localStorage.getItem('volume');
let volume =  savedVolume ? Number(savedVolume) : defaultVolume;

const listeners = [];

export const onVolumeChange = f => listeners.push(f);

export const Volume = () => {
  const element = document.createElement('input');
  element.type =  'range';
  element.id = 'volume';
  element.className = 'slider';
  element.min =  0;
  element.max = 1;
  element.step = 'any';
  element.value = volume;

  const setVolume = (newVolume) => {
    console.log(`[Volume] setVolume to ${newVolume}`);

    localStorage.setItem('volume', newVolume);

    volume = newVolume;

    document.querySelectorAll('video').forEach(v => {
      v.volume = newVolume;
    });

    document.querySelectorAll('audio').forEach(a => {
      a.volume = newVolume;
    });

    listeners.forEach(l => l(newVolume));
  };

  element.addEventListener('change', (event) => {
    const newVolume = event.target.value;
    console.log('volume changed to: ', newVolume);
    setVolume(newVolume);
  });

  setTimeout(() => {
    setVolume(element.value);
  });

  return element;
};

export const getVolume = () => {
  return volume;
}
