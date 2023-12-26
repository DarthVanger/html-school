import { Bar } from './Bar.js';
import { Label } from './Label.js';

export const StatsBarChart = (state) => {
  const element = document.createElement('article');
  element.className = 'stats-bar-chart';

  const { student } = state;

  console.log('state: ', state);

  const stats = {
    //courses: state.codeAcademyPoints,
    //lectures: state.lecturePoints[student],
    //homework: state.questPoints[student],
    lectures: state.experience[student].lectures,
    homework: state.experience[student].homework,
  }

  element.append(Label("Lectures"))
  element.append(Bar(stats.lectures))
  element.append(Label("Homework"))
  element.append(Bar(stats.homework))

  return element;
}
