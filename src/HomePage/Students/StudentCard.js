import { Avatar } from '../../Avatar.js';
import { StatsBarChart } from './StatsBarChart/StatsBarChart.js';
import { AddSkillForm } from './AddSkillForm.js';

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

  const addSkillForm = AddSkillForm({ student, onSubmit: handleSkillSubmit });

  const avatarElement = document.createElement('div');
  avatarElement.innerHTML = Avatar({student});
  avatarElement.addEventListener('click', handleAvatarClick);

  function render() {
    element.innerHTML = '';
    element.append(avatarElement);
    element.append(StatsBarChart({ ...state, student }));
  }

  function handleAvatarClick() {
    element.append(addSkillForm)
  }


  render();

  return element;
};
