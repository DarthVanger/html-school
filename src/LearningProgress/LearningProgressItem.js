import { LectureSkills } from './LectureSkills.js';

export const LearningProgressItem = ({ item, idx, isLastItem }) => {
  const element = document.createElement('div');
  element.className = 'learning-progress-item';

  const r = 20;
  const cx = r;
  const cy = r;

  element.innerHTML = `
    <div class="item-text">
      ${item.date && (`
        <span class="date">
          [${(new Date(item.date)).toDateString()}]
        </span>
      `) || ''}
      <span>
        УРОКЕ #${idx + 1}: ${item.text} 
      </span>
    </div>
    ${item.poster && `
      <figure class="figure">
        <img src="${item.poster}" />
      </figure>
    ` || ''}
    <ol class="lesson-items">
      ${item.items.map(lessonItem => `
        <li><span>${lessonItem}</span></li>
      `).join('')}
    </ol>
    ${item.url && `
      <a href="${item.url}">
        СЛАЙДЫ
      </a>
    ` || ''}
    <div class="item-skills">
        СКИЛЫ: ${LectureSkills({skills: item.skills })}
    </div>
    ${item.students && `
      <div class="item-attendees">
        ПРИТУСТНІ: ${item.students.join(', ')}
      </div>
    ` || ''}
    ${!isLastItem && `
      <svg>
        <line x1="0" y1="0" x2="0" y2="100" />
      </svg>
    ` || ''}
  `;

  return element;
};

