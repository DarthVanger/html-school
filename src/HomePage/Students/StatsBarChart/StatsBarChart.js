import { Bar } from './Bar.js';

export const StatsBarChart = (state) => {
  const element = document.createElement('article');
  element.className = 'stats-bar-chart';

  const { student } = state;

  const stats = {
    courses: state.codeAcademyPoints,
    //lectures: state.lecturePoints[student],
    //homework: state.questPoints[student],
    lectures: 50,
    homework: 30,
  }

  element.append(Bar(stats.courses))
  element.append(Bar(stats.lectures))
  element.append(Bar(stats.homework))

  return element;
}
