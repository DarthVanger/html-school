
export const LearningProgressItem = ({ item, idx }) => {
  const element = document.createElement('div');
  element.className = 'learning-progress-item';

  const r = 20;
  const cx = r;
  const cy = r;

  element.innerHTML = `
    <div class="item-text">
        УРОКЕ #${idx + 1}: ${item.text} 
    </div>
    <a href="${item.url}">
      СЛАЙДЫ
    </a>
    <div class="item-skills">
        СКИЛЫ: ${item.skills.join(', ')} 
    </div>
    <svg>
      <circle r="${r}" cx="${cx}" cy="${cy}" />
    </svg>
  `;

  return element;
};
