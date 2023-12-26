import { Avatar } from '../../Avatar.js';
import { StatsBarChart } from './StatsBarChart/StatsBarChart.js';

export const StudentCard = (state) => {
  const element = document.createElement('article');
  element.className = 'student-card';

  const { student } = state;

  const avatarElement = document.createElement('div');
  avatarElement.innerHTML = Avatar({student});
  avatarElement.addEventListener('click', handleAvatarClick);

  element.append(avatarElement);
  element.append(StatsBarChart({ ...state, student }));
  
  function handleAvatarClick() {
    const body = {
      category: 'ghost of kyiv',
      points: 10,
      description: 'ot y4itel9',
    }

    fetch(`/experience/${student}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return element;
};
