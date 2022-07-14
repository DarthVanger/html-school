export const napaleon = (text) => {
  const element = document.querySelector('#mentor');
  const mentorRef = element;

  element.style.left = 'calc(50% - 300)';
  element.style.top = 'calc(50% - 100)';

  mentorRef.querySelector('#mentor-message').innerHTML = text;
  mentorRef.querySelector('button').innerHTML = 'Ура ☺';

  element.style.display = 'flex';
};
