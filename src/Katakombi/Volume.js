const getElement = () => document.querySelector('#volume');

let volume = 0.3;

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
