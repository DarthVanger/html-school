import { Avatar } from '../../Avatar.js';
import { StatsBarChart } from './StatsBarChart/StatsBarChart.js';
import { AddSkillForm } from './AddSkillForm.js';
import { ExperienceHistory } from './ExperienceHistory.js';

export const StudentCard = (state) => {
  const element = document.createElement('article');
  element.className = 'student-card';

  const { student } = state;

  const handleSkillSubmit = () => {
    addSkillForm.remove()

    fetch('/experience')
      .then(r => r.json())
      .then(r => {
        state.experience = r;
        render();
      })
  }

  let addSkillForm = AddSkillForm({ student, onSubmit: handleSkillSubmit });

  const avatarElement = document.createElement('div');
  avatarElement.innerHTML = Avatar({student});
  avatarElement.addEventListener('click', handleAvatarClick);


  const showExperienceHistoryButton = document.createElement('button');
  showExperienceHistoryButton.type = 'button';
  showExperienceHistoryButton.className = 'show-experience-button';
  showExperienceHistoryButton.innerText = 'Show experience history';
  showExperienceHistoryButton.addEventListener('click', () => {
    element.append(ExperienceHistory({ ...state, student }));
  });

  function render() {
    element.innerHTML = '';
    const avatarRow = document.createElement('div');
    avatarRow.className = 'avatar-row';
    avatarRow.append(avatarElement);
    avatarRow.append(StatsBarChart({ ...state, student }));
    element.append(avatarRow);
    element.append(showExperienceHistoryButton);
  }

  function handleAvatarClick() {
    addSkillForm = AddSkillForm({ student, onSubmit: handleSkillSubmit })
    element.append(addSkillForm)
  }


  render();

  return element;
};
