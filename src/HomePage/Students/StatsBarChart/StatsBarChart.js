import { Bar } from './Bar.js';
import { Label } from './Label.js';
import { Points } from './Points.js';

export const StatsBarChart = (state) => {
  const element = document.createElement('article');
  element.className = 'stats-bar-chart';

  const { student } = state;

  const experienceEntries = Object.entries(state.experience[student]).sort((entryA, entryB) => entryB[1] - entryA[1]);

  for (const entry of experienceEntries) {
    const category = entry[0]
    const points = entry[1]
    const row = document.createElement('div');
    row.className = 'stats-bar-chart-row';
    row.append(Points(points))
    row.append(Bar(points))
    row.append(Label(category, points))
    element.append(row);
  }

  return element;
}
