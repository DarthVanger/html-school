import { Bar } from './Bar.js';
import { Label } from './Label.js';

export const StatsBarChart = (state) => {
  const element = document.createElement('article');
  element.className = 'stats-bar-chart';

  const { student } = state;

  for (const category in state.experience[student]) {
    const points = state.experience[student][category]
    element.append(Label(category))
    element.append(Bar(points))
  }

  return element;
}
