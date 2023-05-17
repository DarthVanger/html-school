import { Levels } from './Levels/Levels.js';
import { Story } from './Story.js';
import { Topbar } from '../../Topbar.js';

const element = document.createElement('div');
element.id = 'main-page';
export const QuestList = (state) => {
  element.append(Topbar({ backUrl: '/#/', surface: 'black' }));

  const storyFragment = document.createDocumentFragment();
  storyFragment.innerHTML = Story(state);
  element.append(storyFragment);

  element.append(Levels(state));

  return element;
};
