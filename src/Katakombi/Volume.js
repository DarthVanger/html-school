const getElement = () => document.querySelector('#volume');

const defaultVolume = 0.3;
const savedVolume = localStorage.getItem('volume');
let volume =  savedVolume ? Number(savedVolume) : defaultVolume;

const listeners = [];

export const onVolumeChange = f => listeners.push(f);

export const Volume = () => {
  const element = document.createElement('div');
  element.id = 'volume';


  const input = document.createElement('input');
  input.type =  'range';
  input.className = 'slider';
  input.min =  0;
  input.max = 1;
  input.step = 'any';
  input.value = volume;

  element.append(document.createTextNode('🔊'));
  element.append(input);

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

  input.addEventListener('change', (event) => {
    const newVolume = event.target.value;
    console.log('volume changed to: ', newVolume);
    setVolume(newVolume);
  });

  setTimeout(() => {
    setVolume(input.value);
  });

  return element;
};

export const getVolume = () => {
  return volume;
}
