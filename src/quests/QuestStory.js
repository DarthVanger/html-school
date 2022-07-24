const element = document.createElement('div');
element.id='quest-story';
export const QuestStory = ({ quest }) => {
  element.innerHTML = quest.story;
  return element;
};
